import React, { useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { SplashScreen } from '@/components/screens';
import { useSession } from '@/context/AuthContext';

const Splash = () => {
    const router = useRouter();
    const { session, isLoading } = useSession();


    useEffect(() => {
        const bootstrap = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000));
            const isOnboarded = await AsyncStorage.getItem("isOnboarded");
            if (isOnboarded === "true") {
                if(!isLoading) {
                    if(session) router.replace("/(app)");
                    else {
                        router.replace("/auth");
                    }
                }
            } else {
                router.replace("/onboarding");
            }
        };
        bootstrap();
    }, [isLoading]);


    return <SplashScreen />
};

export default Splash;
