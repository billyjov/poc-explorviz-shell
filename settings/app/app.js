import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import { customElement } from 'ember-custom-elements';

import config from 'settings/config/environment';

@customElement('ember-settings-app', { useShadowRoot: true })
export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
  rootElement = '#emberSettingsApp'
}

loadInitializers(App, config.modulePrefix);
