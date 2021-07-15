'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const sass = require('sass');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // single-spa required options
    // autoRun: false,

    storeConfigInMeta: false,

    'ember-bootstrap': {
      bootstrapVersion: 4,
      importBootstrapCSS: true,
    },
    sassOptions: {
      implementation: sass,
    },
    fingerprint: {
      customHash: null,
      enabled: false,
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
    emberCliConcat: {
      enabled: true,
      outputDir: 'assets',
      outputFileName: 'landscapes',
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

  app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
  app.import('node_modules/alertifyjs/build/css/alertify.min.css');
  app.import('node_modules/auth0-js/build/auth0.js');

  return app.toTree();
};
