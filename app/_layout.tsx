import { AuthProvider, CartProvider, FavoritesProvider } from '@/context';
import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="onboarding" options={{ title: "Onboarding" }} />
            <Stack.Screen name="auth" options={{ title: "Auth" }} />
            <Stack.Screen name="search" options={{ title: "Search" }} />
            <Stack.Protected guard={true}>
              <Stack.Screen name="(app)" />
            </Stack.Protected>
          </Stack>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}