import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Auth0UserProfile } from 'auth0-js';
import { Base64 } from 'js-base64';
import { BehaviorSubject } from 'rxjs';

import { TokenPayload } from './session.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private payload?: TokenPayload;
  private token?: string;
  private userChangeSubject = new BehaviorSubject<Auth0UserProfile | null>(
    null
  );

  constructor(private router: Router) {}

  public logout(): void {
    this.token = undefined;
    this.payload = undefined;

    this.userChangeSubject.complete();
    // Reset change subject
    this.userChangeSubject = new BehaviorSubject<Auth0UserProfile | null>(null);
    this.clearStorage();

    // Navigate to login
    this.router.navigate(['login']);
  }

  public update(
    token: string,
    user: Auth0UserProfile
  ): Auth0UserProfile | null {
    let userValue = this.userChangeSubject.getValue();
    try {
      this.token = token;
      this.payload = this.parseToken(token);
      userValue = user;
      this.userChangeSubject.next(userValue);
      sessionStorage.setItem('accessToken', this.token);
    } catch (error) {
      throw error;
    }
    return user;
  }

  public hasTokenInStorage(): boolean {
    return !!sessionStorage.getItem('accessToken');
  }

  public hasValidToken(): boolean {
    return !!this.payload && this.payload.exp > Date.now() / 1000;
  }

  public isAuthenticated(): boolean {
    return this.userChangeSubject.getValue() !== null;
  }

  public get user(): Auth0UserProfile | null {
    return this.userChangeSubject.getValue();
  }

  private clearStorage(): void {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('user');
  }

  private parseToken(token: string): TokenPayload {
    return JSON.parse(Base64.decode(token.split('.')[1]));
  }
}
