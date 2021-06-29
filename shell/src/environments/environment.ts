// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth0: {
    clientId: 'Um81o8aATzAiL7I2CWax9ezLMP3R6gYq',
    domain: 'dev-0kw21a7w.auth0.com',
    logoUrl: 'http://localhost:4400/login/assets/img/explorviz-logo.png',
    callbackUrl: 'http://localhost:4200/callback',
    logoutReturnUrl: 'http://localhost:4200/',
    routeAfterLogin: '/list',
    accessToken: '',
    profile: {},
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
