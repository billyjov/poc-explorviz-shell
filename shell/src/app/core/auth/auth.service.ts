import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Auth0Lock } from 'auth0-lock';
import { Auth0Error, Auth0UserProfile } from 'auth0-js';

import { environment } from '../../../environments/environment';
import { SessionService } from '../session/session.service';

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

  constructor(private router: Router, private sessionService: SessionService) {
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
      this.router.navigate([environment.auth0.routeAfterLogin]);
    }
  }

  public logout(): void {
    // ...implement logout
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('accessToken');
    this.sessionService.logout();
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
        this.lock.checkSession(
          {},
          async (err, authResult: AuthResult | undefined) => {
            if (err || authResult === undefined) {
              // TODO: check correct method

              sessionStorage.removeItem('user');
              sessionStorage.removeItem('accessToken');
              this.sessionService.logout();
              this.lock.show();
              reject(err);
            } else {
              // TODO: ask for current method
              sessionStorage.setItem('accessToken', authResult.accessToken);
              await this.setUser(authResult.accessToken);
              resolve(authResult);
            }
          }
        );
      } else {
        // no-auth
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
              this.sessionService.update('', {} as Auth0UserProfile);
              reject(_err);
            } else {
              this.sessionService.update(token, profile);
              sessionStorage.setItem('user', JSON.stringify(profile));
              resolve(profile);
            }
          }
        );
      } else {
        // no-auth
        resolve(
          environment.auth0.profile as
            | Auth0UserProfile
            | PromiseLike<Auth0UserProfile>
        );
      }
    });
  }

  public get user(): Auth0UserProfile | null {
    return this.sessionService.user;
  }
}
