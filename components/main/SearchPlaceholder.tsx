import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { router } from "expo-router";

const SearchPlaceholder = () => {
    return (
        <View style={styles.searchContainer}>
            <Pressable style={styles.search} onPress={()=> router.push("/search")}>
                <Ionicons name="search-outline" size={20} color="#b9bdbe" />
                <Text style={styles.placeholder}>Search</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {},
    search: {
        borderRadius: 16,
        backgroundColor: '#f5f5f5',
        paddingVertical: 16,
        paddingHorizontal: 16,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 6,
    },
    placeholder: {
        fontSize: 16,
        fontWeight: '400',
        color: '#b9bdbe',
    }
});


export default SearchPlaceholder;