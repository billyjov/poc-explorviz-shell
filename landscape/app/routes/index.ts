import Route from '@ember/routing/route';

/**
 * TODO
 *
 * @class Landascapes-Route
 * @extends Ember.Route
 */
export default class IndexRoute extends Route {
  beforeModel(transition: any) {
    console.log('============ before model index landscape: ================');
    super.beforeModel(transition);
    // this.replaceWith('landscapes/');
    this.transitionTo('landscapes');
  }
}
