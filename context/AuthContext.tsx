import { use, createContext, type PropsWithChildren, useState } from 'react';
import { useStorageState } from '@/hooks/useStorageState';

const AuthContext = createContext<{
    signIn: () => void;
    signOut: () => void;
    session?: string | null;
    isLoggedIn?: boolean;
    isLoading: boolean;
}>({
    signIn: () => null,
    signOut: () => null,
    session: null,
    isLoading: false,
    isLoggedIn: false,
});

export function useSession() {
    const value = use(AuthContext);
    if (!value) {
        throw new Error('useSession must be wrapped in a <SessionProvider />');
    }

    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState('session');
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    return (
        <AuthContext
            value={{
                signIn: () => {
                    handleLogin();
                    setSession('xxx');  
                },
                signOut: () => {
                    setSession(null);
                },
                session,
                isLoading,
                isLoggedIn,
            }}
        >
            {children}
        </AuthContext>
    );
}
