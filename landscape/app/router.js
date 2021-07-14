import EmberRouter from '@ember/routing/router';
import config from 'landscape/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('landscapes');
  this.route('callback');
  this.route('landscapes-login');
});