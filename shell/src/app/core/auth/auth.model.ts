export interface AuthResult {
  accessToken: string;
  appState: string;
  expiresIn: number;
  idToken?: number;
  idTokenPayload?: string;
  refreshToken?: string;
  scope: string;
  state: string;
  tokenType: string;
}
