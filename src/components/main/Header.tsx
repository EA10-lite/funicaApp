import { useAuthContext } from "@/context/AuthContext";
import { getGreeting } from "@/utils/date";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Avatar from "./Avatar";

const Header = () => {
    const { user } = useAuthContext();
    return (
        <View style={styles.header}>
            <View style={styles.row}>
                <View style={styles.left}>
                    <Avatar 
                        initials="Chris Suttor"
                        uri="https://media.gettyimages.com/id/1460124878/photo/social-media-connection-and-woman-typing-on-a-phone-for-communication-app-and-chat-web-search.jpg?s=612x612&w=0&k=20&c=fJvxm6AuV1B0RkSKPx9BOuy-JQTevt1Ah0kySJ_GeRY="
                    />

                    <View>
                        <Text style={styles.subtitle}>{getGreeting()}</Text>
                        <Text style={styles.title}>{user?.firstName || user?.lastName}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Pressable onPress={()=> router.push("/notification")}>
                        <Ionicons name="notifications-outline" size={24} color="black" />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 24,
        borderBottomColor: "#e2e2e2",
        borderBottomWidth: 1,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#757573',
        marginBottom: 2,
    },
    right: {},

});

export default Header;