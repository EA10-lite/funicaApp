import { use, createContext, type PropsWithChildren, useState, useEffect } from 'react';
import { useStorageState } from '@/hooks/useStorageState';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserDTO {
    email:      string;
    name:       string;
    phone:      string;
    address:    Address[];
}

interface Address {
    type:       string;
    address:    string;
}

const AuthContext = createContext<{
    signIn: () => void;
    signOut: () => void;
    setUser: (data: UserDTO) => void;
    user:   UserDTO | null;
    session?: string | null;
    isLoggedIn?: boolean;
    isLoading: boolean;
}>({
    signIn: () => null,
    signOut: () => null,
    setUser: (data: UserDTO) => null,
    session: null,
    user: null,
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
    const [user, setUser] = useState<UserDTO | null>(null);

    const handleLogin = () => {
        setIsLoggedIn(true);
        const temp_user = {
            name: "Emmanuel Anyigor",
            email: "emanuelanyigor@gmail.com",
            phone: "+234 7061 326 122",
            address: [
                {
                    type: "Home",
                    address: "123 Ikeja Road, Lagos Nigeria",
                },
                {
                    type: "Office",
                    address: "Unilag Road Akoka Yaba",
                },
                {
                    type: "Apartment",
                    address: "13 Shakiru Yusuf Off Igbe Road, Oreyo Ikorodu",
                },
                {
                    type: "School",
                    address: "Unilag Road Akoka Yaba",
                }
            ]
        }
        setUser(temp_user);
    }

    return (
        <AuthContext
            value={{
                signIn: () => {
                    handleLogin();
                    setSession('abc');  
                },
                signOut: () => {
                    setSession(null);
                },
                user,
                setUser,
                session,
                isLoading,
                isLoggedIn,
            }}
        >
            {children}
        </AuthContext>
    );
}
