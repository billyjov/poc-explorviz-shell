import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { environment } from '../environments/environment';

// import { JwtHelperService } from '@auth0/angular-jwt';
import { Auth0Lock } from 'auth0-lock';

// import { } from '@auth0/auth0-angular';
import { Auth0Error, Auth0UserProfile } from 'auth0-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth0Options = {
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
  lock = new Auth0Lock(
    environment.auth0.clientId,
    environment.auth0.domain,
    this.auth0Options
  );
  constructor(private router: Router) {
    this.lock.on('authenticated', (authResult: any) => {
      console.log('Nice, it worked!: ', authResult);
      this.router.navigate(['/']); // go to the home route
      // ...finish implementing authenticated
    });
    this.lock.on('authorization_error', (error) => {
      console.log('something went wrong', error);
    });
  }
  login() {
    // this.lock.show();
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
  logout() {
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

  checkLogin() {
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

  setUser(token: string) {
    // once we have a token, we are able to go get the users information
    return new Promise<Auth0UserProfile>((resolve, reject) => {
      if (this.lock) {
        this.lock.getUserInfo(
          token,
          (_err: Auth0Error, profile: Auth0UserProfile) => {
            if (_err) {
              reject(_err);
            } else {
              // this.debug('User set', profile);
              // this.set('user', profile);
              // this.currentUser$.next(profile);
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
