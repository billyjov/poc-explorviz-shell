'use strict';
const BACKEND_CONFIG = require('./backend-addresses');
const AUTH_CONFIG = require('./auth0-variables');

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'landscape',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },
    backendAddresses: {
      landscapeService: BACKEND_CONFIG.landscapeService,
      traceService: BACKEND_CONFIG.traceService,
      userService: BACKEND_CONFIG.userService,
      collaborativeService: BACKEND_CONFIG.collaborativeService,
    },
    auth0: {
      clientId: AUTH_CONFIG.clientId,
      domain: AUTH_CONFIG.domain,
      logoUrl: AUTH_CONFIG.logoUrl,
      callbackUrl: AUTH_CONFIG.callbackUrl,
      logoutReturnUrl: AUTH_CONFIG.logoutReturnUrl,
      routeAfterLogin: AUTH_CONFIG.routeAfterLogin,
      accessToken: AUTH_CONFIG.accessToken,
      profile: AUTH_CONFIG.profile,
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    // autoboot = false;
    ENV.APP.autoboot = false;
  }

  return ENV;
};
