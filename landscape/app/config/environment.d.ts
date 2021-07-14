import { Auth0UserProfile } from 'auth0-js';

export default config;

/**
 * Type declarations for
 *    import config from 'my-app/config/environment'
 */
declare const config: {
  environment: string;
  modulePrefix: string;
  podModulePrefix: string;
  locationType: string;
  rootURL: string;
  APP: Record<string, unknown>;
  backendAddresses: {
    landscapeService: string;
    traceService: string;
    userService: string;
    collaborativeService: string;
  };
  auth0: {
    clientId: string;
    domain: string;
    logoUrl: string;
    callbackUrl: string;
    logoutReturnUrl: string;
    routeAfterLogin: string;
    accessToken: string;
    profile: Auth0UserProfile;
  };
};
