import React from 'react';
import { OktaAuth } from '@okta/okta-auth-js';

const configOptions = {
  issuer: process.env.NEXT_PUBLIC_ISSUER,
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI,
};

const authClient: OktaAuth = new OktaAuth(configOptions);

const AuthContext = React.createContext(authClient);
export const AuthProvider = AuthContext.Provider;
export default AuthContext;

