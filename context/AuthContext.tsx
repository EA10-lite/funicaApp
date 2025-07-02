import { UserDTO } from '@/dto/user.dto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AuthContextType {
    signIn:     () => void,
    signOut:    () => void,
    setUser:    (data: UserDTO) => void,
    user:       UserDTO | null,
    isLoggedIn: boolean,
    loading:    boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useFavoriteContext must be used within a FavoriteProvider");
    }
    return context;
};

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<UserDTO | null>(null);

    const signIn = async () => {
        setIsLoggedIn(true);
        const data = {
            firstName: "Emmanuel",
            lastName: "Anyigor",
            country: "Nigeria",
            gender: "Male",
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
        };

        setUser(data);
        await AsyncStorage.setItem("user", JSON.stringify(data));
    }

    const signOut = async () => {
        await AsyncStorage.removeItem("user");
        setUser(null);
        setIsLoggedIn(false);
    }

    const [loading, setLoading] = useState(true);
    const getUser = async () => {
        try {
            const storedUser = await AsyncStorage.getItem("user");
            if(storedUser) {
                setUser(JSON.parse(storedUser));
                setIsLoggedIn(true);
            }
            else {
                setIsLoggedIn(false);
            }
        } catch (error) {

        }finally {
            setLoading(false);
        }
    }


    useEffect(()=> {
        getUser();
    },[])

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                signIn,
                signOut,
                isLoggedIn,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider;