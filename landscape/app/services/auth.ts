import Service, { inject as service } from '@ember/service';
import config from 'landscape/config/environment';
import { Auth0Error, Auth0UserProfile } from 'auth0-js';
import Auth0Lock from 'auth0-lock';
// import debugLogger from 'ember-debug-logger';

import { BehaviorSubject } from 'rxjs';

export default class Auth extends Service {
  // private debug = debugLogger();

  @service('router')
  router!: any;

  // is initialized in the init()
  private lock: Auth0LockStatic | null = null;

  user: Auth0UserProfile | undefined = undefined;

  accessToken: string | undefined = undefined;

  currentRouteLocation$: BehaviorSubject<string> = new BehaviorSubject<string>(
    location.pathname
  );
  currentUser$: BehaviorSubject<Auth0UserProfile | undefined> =
    new BehaviorSubject<Auth0UserProfile | undefined>(undefined);

  init() {
    super.init();
    this.currentRouteLocation$.next(location.pathname);
    if (config.environment === 'noauth') {
      // no-auth
      this.set('user', config.auth0.profile);
      this.set('accessToken', config.auth0.accessToken);
      return;
    }

    this.lock = new Auth0Lock(config.auth0.clientId, config.auth0.domain, {
      auth: {
        redirectUrl: config.auth0.callbackUrl,
        audience: `https://${config.auth0.domain}/api/v2/`,
        responseType: 'token',
        params: {
          scope: 'openid profile',
        },
        autoParseHash: true,
      },
      container: 'auth0-login-container',
      theme: {
        logo: config.auth0.logoUrl,
      },
      closable: false,
      languageDictionary: {
        title: 'ExplorViz',
      },
    });

    this.lock.on('authenticated', (authResult: any) => {
      this.router.transitionTo(config.auth0.routeAfterLogin).then(async () => {
        await this.setUser(authResult.accessToken);
        this.set('accessToken', authResult.accessToken);
        // TODO: ask for access token
        sessionStorage.setItem('accessToken', authResult.accessToken);
      });
    });
  }

  /**
   * Send a user over to the hosted auth0 login page
   */
  login() {
    this.currentRouteLocation$.next(location.pathname);

    // Since testem seems to enter routes but not render their templates,
    // the login container does not necessarily exist, which results in an error
    if (!document.getElementById('auth0-login-container')) {
      return;
    }

    if (this.lock) {
      this.lock.show();
    } else {
      // no-auth
      this.router.transitionTo(config.auth0.routeAfterLogin);
    }
  }

  /**
   * Use the token to set our user
   */
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
              this.set('user', profile);
              this.currentUser$.next(profile);
              sessionStorage.setItem('user', JSON.stringify(profile));
              resolve(profile);
            }
          }
        );
      } else {
        // no-auth
        this.set('user', config.auth0.profile);
        this.currentUser$.next(config.auth0.profile);
        resolve(config.auth0.profile);
      }
    });
  }

  /**
   * Check if we are authenticated using the auth0 library's checkSession
   */
  checkLogin() {
    // check to see if a user is authenticated, we'll get a token back
    return new Promise((resolve, reject) => {
      if (this.lock) {
        this.lock.checkSession({}, async (err: any, authResult: any) => {
          // this.debug(authResult);
          if (err || authResult === undefined) {
            this.set('user', undefined);
            this.set('accessToken', undefined);
            this.currentUser$.next(undefined);
            // TODO: check correct method
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('accessToken');
            reject(err);
          } else {
            this.set('accessToken', authResult.accessToken);
            // TODO: ask for current method
            sessionStorage.setItem('accessToken', authResult.accessToken);
            await this.setUser(authResult.accessToken);
            resolve(authResult);
          }
        });
      } else {
        // no-auth
        this.currentUser$.next(config.auth0.profile);
        this.set('user', config.auth0.profile);
        this.set('accessToken', config.auth0.accessToken);
        sessionStorage.setItem('user', JSON.stringify(config.auth0.profile));
        sessionStorage.setItem('accessToken', config.auth0.accessToken);
        resolve({});
      }
    });
  }

  /**
   * Get rid of everything in sessionStorage that identifies this user
   */
  logout() {
    this.currentUser$.next(undefined);
    this.set('user', undefined);
    this.set('accessToken', undefined);
    // TODO: check correct method
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('accessToken');
    if (this.lock) {
      this.lock?.logout({
        clientID: config.auth0.clientId,
        returnTo: config.auth0.logoutReturnUrl,
      });
    } else {
      // no-auth
      this.router.transitionTo('/');
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    auth: Auth;
  }
}
