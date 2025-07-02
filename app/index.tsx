import { SplashScreen } from '@/components/screens';
import { useAuthContext } from '@/context/AuthContext';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect } from 'react';

const Splash = () => {
    const router = useRouter();
    const { isLoggedIn, loading } = useAuthContext();


    useEffect(() => {
        const bootstrap = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000));
            const isOnboarded = await AsyncStorage.getItem("isOnboarded");
            if (isOnboarded === "true") {
                if(loading) return;

                else if(!isLoggedIn) {
                    router.replace("/auth");
                }
                
                else {
                    router.replace("/(app)");
                }
            } else {
                router.replace("/onboarding");
            }
        };
        bootstrap();
    }, [loading]);


    return <SplashScreen />
};

export default Splash;
