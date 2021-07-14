import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'landscape/config/environment';
import { customElement } from 'ember-custom-elements';
@customElement('ember-landscapes-app', { useShadowRoot: true })
export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
  // for consummation inside parent app
  // rootElement = '#landscapeApp';
  // needed for custom elements.
  // TODO: use environment variables to deal with this.
  // autoboot = false;
}

loadInitializers(App, config.modulePrefix);
