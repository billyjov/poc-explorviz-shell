import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';

// NOTE: this app use a patch version of ember-custom-elements to deal with external dependencies
// of this app.
import { customElement } from 'ember-custom-elements-patch';

import config from 'visualization/config/environment';

/**
 *  Explicit set shadow DOM to false because of multiples click events to handle
 */
@customElement('ember-visualizations-app', { useShadowRoot: false })
export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
