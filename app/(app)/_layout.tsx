import React from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { AntDesign, Entypo, Feather, FontAwesome6 } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
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
            title: 'Home',
                tabBarIcon: ({ color }) => <Entypo size={28} name="home" color={color} />,
            }}
        />
        <Tabs.Screen
            name="cart"
            options={{
            title: 'Cart',
                tabBarIcon: ({ color }) => <Feather name="shopping-bag" size={24} color="black" />,
            }}
        />
        <Tabs.Screen
            name="order"
            options={{
            title: 'Order',
                tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" size={24} color="black" />,
            }}
        />
        <Tabs.Screen
            name="wallet"
            options={{
            title: 'Wallet',
                tabBarIcon: ({ color }) => <Entypo name="wallet" size={24} color="black" />,
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
            title: 'Profile',
                tabBarIcon: ({ color }) => <FontAwesome6 name="circle-user" size={24} color="black" />,
            }}
        />
    </Tabs>
  );
}
