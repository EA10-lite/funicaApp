import { AntDesign, Entypo, Feather, FontAwesome6 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#b9bdbe',
            tabBarStyle: Platform.select({
                ios: {
                    position: 'absolute',
                },
                default: {},
            }),
        }}>
        <Tabs.Screen
            name="index"
            options={{
            title: 'Search',
                tabBarIcon: ({ color }) => <Entypo size={28} name="home" color={color} />,
            }}
        />
        <Tabs.Screen
            name="saved"
            options={{
            title: 'Saved',
                tabBarIcon: ({ color }) => <Feather name="shopping-bag" size={24} color={color} />,
            }}
        />
        <Tabs.Screen
            name="booking"
            options={{
            title: 'Booking',
                tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" size={24} color={color} />,
            }}
        />
        <Tabs.Screen
            name="account"
            options={{
            title: 'Account',
                tabBarIcon: ({ color }) => <FontAwesome6 name="circle-user" size={24} color={color} />,
            }}
        />
    </Tabs>
  );
}
