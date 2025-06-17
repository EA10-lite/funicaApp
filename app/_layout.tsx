import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { SplashScreen } from "@/components/screens";

export default function RootLayout() {
  const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);
  const [isSplashVisible, setIsSplashVisible] = useState<boolean>(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        setTimeout(async () => {
          const value = await AsyncStorage.getItem('isLoaded');
          if (value === null) {
            await AsyncStorage.setItem('isLoaded', 'false');
            setIsFirstTime(true);
          } else {
            setIsFirstTime(value === 'true');
          }
          setIsSplashVisible(false);
        }, 3000);
      } catch (error) {
        console.error('Error checking onboarding status:', error);
        setIsFirstTime(false);
        setIsSplashVisible(false);
      }
    };

    initializeApp();
  }, []);

  if (isSplashVisible || isFirstTime === null) {
    return <SplashScreen />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={isFirstTime ? "onboarding" : "auth"}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="onboarding" options={{ title: "Onboarding" }} />
      <Stack.Screen name="auth" options={{ title: "Auth" }} />
    </Stack>
  );
}