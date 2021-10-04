import Controller from '@ember/controller';
import { action } from '@ember/object';

/**
 *
 * @class Application-Controller
 * @extends Ember.Controller
 *
 * @module explorviz
 * @submodule page
 */
export default class ApplicationController extends Controller {

  @action
  public updateColors(): void {
    console.log('hello')
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  // tslint:disable-next-line: interface-name
  interface Registry {
    applicationController: ApplicationController;
  }
}
