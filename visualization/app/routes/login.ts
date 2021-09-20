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
      .then((val) => {
        console.log('value from login: ', val)
        this.getRandomLandscapeToken();
        console.log('here to navigate after login')
        return this.transitionTo(config.auth0.routeAfterLogin);
      })
      .catch(() => this.auth.login());
  }

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
    console.log('token to set: ', token);
    localStorage.setItem('currentLandscapeToken', JSON.stringify(token));
  }
}
