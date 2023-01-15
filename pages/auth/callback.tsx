import React, { useEffect, useContext } from 'react';
import AuthContext from '../../lib/context/authContext';
import { OktaAuth } from '@okta/okta-auth-js';

export default function CallbackComp() {
    const authClient: OktaAuth = useContext(AuthContext);

    useEffect(() => {
        const storeToken = async () => {
            authClient.storeTokensFromRedirect();
        }
        storeToken().catch(console.error)
    },[]);
    

    return(
    <div>
        This is callback page
    </div>
    )
}

