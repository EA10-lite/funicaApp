import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Avatar from "./Avatar";
import { Ionicons } from "@expo/vector-icons";
import SearchPlaceholder from "./SearchPlaceholder";

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.row}>
                <View style={styles.left}>
                    <Avatar 
                        initials="Chris Suttor"
                        uri="https://media.gettyimages.com/id/1460124878/photo/social-media-connection-and-woman-typing-on-a-phone-for-communication-app-and-chat-web-search.jpg?s=612x612&w=0&k=20&c=fJvxm6AuV1B0RkSKPx9BOuy-JQTevt1Ah0kySJ_GeRY="
                    />

                    <View>
                        <Text style={styles.subtitle}>Good Morning</Text>
                        <Text style={styles.title}>Chris Sutton</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                </View>
            </View>

            <SearchPlaceholder />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 24,
        marginBottom: 24,
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