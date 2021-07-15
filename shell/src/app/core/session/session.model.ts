export interface TokenPayload {
  iss: string;
  sub: string;
  aud: string[];
  iat: number;
  exp: number;
}
