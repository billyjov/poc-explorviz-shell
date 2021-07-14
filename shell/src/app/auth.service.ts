import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Auth0Lock } from 'auth0-lock';
import { Auth0Error, Auth0UserProfile } from 'auth0-js';
import { BehaviorSubject, Subject } from 'rxjs';

import { environment } from '../environments/environment';

export interface UserProfile {
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  updated_at: Date;
}


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth0Options = {
    auth: {
      redirectUrl: environment.auth0.callbackUrl,
      audience: `https://${environment.auth0.domain}/api/v2/`,
      responseType: 'token',
      params: {
        scope: 'openid profile',
      },
      autoParseHash: true,
    },
    container: 'auth0-login-container',
    theme: {
      logo: environment.auth0.logoUrl,
    },
    closable: false,
    languageDictionary: {
      title: 'ExplorViz',
    },
  };

  private lock: Auth0LockStatic = new Auth0Lock(
    environment.auth0.clientId,
    environment.auth0.domain,
    this.auth0Options
  );

  private currentUser$$: Subject<Auth0UserProfile> = new BehaviorSubject<Auth0UserProfile>({} as Auth0UserProfile);

  constructor(private router: Router) {
    this.lock.on('authenticated', async (authResult: any) => {
      await this.setUser(authResult.accessToken);
      // TODO: ask for access token
      sessionStorage.setItem('accessToken', authResult.accessToken);
      // this.router.navigate(['/']); // go to the home route
      // ...finish implementing authenticated
    });
    this.lock.on('authorization_error', (error) => {
      console.log('something went wrong', error);
    });
  }

  public login(): void {
    if (!document.getElementById('auth0-login-container')) {
      return;
    }

    if (this.lock) {
      this.lock.show();
    } else {
      // no-auth
      //  this.router.transitionTo(config.auth0.routeAfterLogin);
    }
  }

  public logout(): void {
    // ...implement logout
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('accessToken');
    if (this.lock) {
      this.lock?.logout({
        clientID: environment.auth0.clientId,
        returnTo: environment.auth0.logoutReturnUrl,
      });
    } else {
      // no-auth
      this.router.navigateByUrl('/');
    }
  }

  public checkLogin(): Promise<unknown> {
    // check to see if a user is authenticated, we'll get a token back
    return new Promise((resolve, reject) => {
      if (this.lock) {
        this.lock.checkSession({}, async (err, authResult) => {
          // this.debug(authResult);
          if (err || authResult === undefined) {
            // this.set('user', undefined);
            // this.set('accessToken', undefined);
            // this.currentUser$.next(undefined);
            // TODO: check correct method
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('accessToken');
            reject(err);
          } else {
            // this.set('accessToken', authResult.accessToken);
            // TODO: ask for current method
            sessionStorage.setItem('accessToken', authResult.accessToken);
            await this.setUser(authResult.accessToken);
            resolve(authResult);
          }
        });
      } else {
        // no-auth
        // this.currentUser$.next(config.auth0.profile);
        // this.set('user', config.auth0.profile);
        // this.set('accessToken', config.auth0.accessToken);
        sessionStorage.setItem(
          'user',
          JSON.stringify(environment.auth0.profile)
        );
        sessionStorage.setItem('accessToken', environment.auth0.accessToken);
        resolve({});
      }
    });
  }

  public setUser(token: string): Promise<unknown> {
    // once we have a token, we are able to go get the users information
    return new Promise<Auth0UserProfile>((resolve, reject) => {
      if (this.lock) {
        this.lock.getUserInfo(
          token,
          (_err: Auth0Error, profile: Auth0UserProfile) => {
            if (_err) {
              reject(_err);
            } else {
              console.log('hello from service')
              // this.debug('User set', profile);
              // this.set('user', profile);
              this.currentUser$$.next(profile);
              sessionStorage.setItem('user', JSON.stringify(profile));
              resolve(profile);
            }
          }
        );
      } else {
        // no-auth
        // this.set('user', environment.auth0.profile);
        // this.currentUser$.next(environment.auth0.profile);
        // resolve(environment.auth0.profile);
      }
    });
  }
}
