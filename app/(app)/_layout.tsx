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
            name="cart"
            options={{
            title: 'Cart',
                tabBarIcon: ({ color }) => <Feather name="shopping-bag" size={24} color={color} />,
            }}
        />
        <Tabs.Screen
            name="order"
            options={{
            title: 'Order',
                tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" size={24} color={color} />,
            }}
        />
        <Tabs.Screen
            name="wallet"
            options={{
            title: 'Wallet',
                tabBarIcon: ({ color }) => <AntDesign name="wallet" size={24} color={color} />,
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
            title: 'Profile',
                tabBarIcon: ({ color }) => <FontAwesome6 name="circle-user" size={24} color={color} />,
            }}
        />
    </Tabs>
  );
}
