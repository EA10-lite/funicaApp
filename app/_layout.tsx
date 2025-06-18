import React from 'react';
import { SessionProvider } from '@/context/AuthContext';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <SessionProvider>
      <Stack 
        screenOptions={{ headerShown: false }} 
        // initialRouteName='splash'
      >
        <Stack.Screen name="onboarding" options={{ title: "Onboarding" }} />
        <Stack.Screen name="auth" options={{ title: "Auth" }} />
        <Stack.Screen name="search" options={{ title: "Search" }} />
        <Stack.Protected guard={true}>
          <Stack.Screen name="(app)" />
        </Stack.Protected>
      </Stack>
    </SessionProvider>
  );
}