import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import Auth from 'visualization/services/auth';
import config from 'visualization/config/environment';

/**
 * TODO
 *
 * @class Login-Route
 * @extends Ember.Route
 */
export default class LandscapesLoginRoute extends Route {
  @service
  auth!: Auth;

  afterModel() {
    this.auth
      .checkLogin()
      .then(() => this.transitionTo(config.auth0.routeAfterLogin))
      .catch(() => this.auth.login());
  }
}
