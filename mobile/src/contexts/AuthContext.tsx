import { createContext, ReactNode } from 'react';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

interface UserProps {
    name: string;
    avatarUrl: string;
}

export interface AuthContextDataProps {
    user: UserProps;
    signIn: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {

    //Google.useAuthRequest({
      //  clientId:
       // redirectUri: AuthSession.makeRedirectUri({ useProxy: true })
   // })

   console.log();

    async function signIn() {
        console.log('Vamos logar');
        
    }
    return (
        <AuthContext.Provider value={{
            signIn,
            user: {
                name: 'Maiko',
                avatarUrl: 'https://github.com/maikoduarte.png'
            }
        }}>
            {children}

        </AuthContext.Provider>
    );
}