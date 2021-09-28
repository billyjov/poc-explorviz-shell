'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const sass = require('sass');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    storeConfigInMeta: false,

    'ember-bootstrap': {
      bootstrapVersion: 4,
      importBootstrapCSS: false,
    },
    sassOptions: {
      implementation: sass,
    },
    fingerprint: {
      customHash: null,
      enabled: false,
      exclude: ['assets/img'],
    },
    svgJar: {
      sourceDirs: [
        'public', // default SVGJar lookup directory
        'node_modules/@primer/octicons/build/svg',
      ],
    },
    // auth0 globals config.
    autoImport: {
      webpack: {
        node: {
          global: true,
        },
      },
    },
    babel: {
      sourceMaps: 'inline',
    },
    'ember-cli-babel': {
      includePolyfill: true,
      sourceMaps: 'inline',
    },
    emberCliConcat: {
      enabled: true,
      outputDir: 'assets',
      outputFileName: 'visualizations',
      js: {
        concat: true,
        contentFor: 'concat-js',
      },

      css: {
        concat: true,
        contentFor: 'concat-css',
      },
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('node_modules/three/build/three.min.js', {
    prepend: true,
  });

  app.import('vendor/threex/threex.rendererstats.min.js');
  app.import('vendor/threex/threex.dynamictexture.min.js');
  app.import('node_modules/alertifyjs/build/css/alertify.min.css');
  app.import('node_modules/alertifyjs/build/css/themes/default.min.css');
  app.import('vendor/cytoscape/cytoscape.min.js');
  app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
  app.import('vendor/eventsource-polyfill/eventsource.min.js');
  app.import('node_modules/webxr-polyfill/build/webxr-polyfill.min.js');
  app.import('node_modules/elkjs/lib/elk-api.js');

  return app.toTree();
};
