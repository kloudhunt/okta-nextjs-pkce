import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';

import { OktaAuth } from '@okta/okta-auth-js';
import { AuthProvider } from '../lib/context/authContext';

const configOptions = {
  issuer: process.env.NEXT_PUBLIC_ISSUER,
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI,
};


const authClient: OktaAuth = new OktaAuth(configOptions);
// #const AuthContext = React.createContext(authClient);



export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider value={authClient}>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
