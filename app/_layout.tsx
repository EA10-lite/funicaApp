import React from 'react';
import { SessionProvider } from '@/context/AuthContext';
import { Stack } from 'expo-router';
import CartProvider from '@/context/CartContext';
import { FavoritesProvider } from '@/context';

export default function RootLayout() {
  return (
    <SessionProvider>
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
    </SessionProvider>
  );
}