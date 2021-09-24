import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import { customElement } from 'ember-custom-elements';

import config from 'landscape/config/environment';
@customElement('ember-landscapes-app', { useShadowRoot: true })
export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
