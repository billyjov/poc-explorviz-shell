import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import Auth from 'visualization/services/auth';
import config from 'visualization/config/environment';

const { userService } = config.backendAddresses;

/**
 * TODO
 *
 * @class Login-Route
 * @extends Ember.Route
 */
export default class LoginRoute extends Route {
  @service
  auth!: Auth;

  afterModel() {
    this.auth
      .checkLogin()
      .then(() => {
        this.getRandomLandscapeToken();
        return this.transitionTo(config.auth0.routeAfterLogin);
      })
      .catch(() => this.auth.login());
  }

  /**
   * Get list of tokens and save random token for standalone mode in
   * localStorage
   * @returns Promise
   */
  private getRandomLandscapeToken(): Promise<any> {
    let uId = JSON.parse(sessionStorage.getItem('user') as string)?.sub;

    if (!uId) {
      return Promise.reject(new Error('User profile not set'));
    }

    uId = encodeURI(uId);

    return new Promise<any>((resolve, reject) => {
      fetch(`${userService}/user/${uId}/token`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
      })
        .then(async (response: Response) => {
          if (response.ok) {
            const tokens = await response.json();
            const randomToken =
              tokens[Math.floor(Math.random() * tokens.length)];
            this.setToken(randomToken);
            resolve(tokens);
          } else {
            reject();
          }
        })
        .catch((e) => reject(e));
    });
  }

  private setToken(token: unknown): void {
    localStorage.setItem('currentLandscapeToken', JSON.stringify(token));
  }
}
