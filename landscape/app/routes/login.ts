import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Auth from 'landscape/services/auth';
import config from 'landscape/config/environment';

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
      .then(() => this.transitionTo(config.auth0.routeAfterLogin))
      .catch(() => this.auth.login());
  }
}
