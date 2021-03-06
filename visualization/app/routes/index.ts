import Route from '@ember/routing/route';

/**
 * TODO
 *
 * @class Landascapes-Route
 * @extends Ember.Route
 */
export default class IndexRoute extends Route {

  beforeModel(transition: any) {
    super.beforeModel(transition);

    if (!sessionStorage.getItem('accessToken')) {
      this.replaceWith('login');
    } else {
      this.transitionTo('visualization');
    }
  }
}
