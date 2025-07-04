import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";

type CateogryProps = {
    name:       string;
    iconName:   string;
    type:       string;
}

const Category = ({ name, iconName, type } : CateogryProps) => {
    const navigation = useNavigation();

    return (
        <View style={styles.category}>
            <Pressable onPress={()=> router.push(`/category/${name.toLowerCase()}`)}>
                <View style={styles.category}>
                    <View style={styles.iconBox}>
                        { type === "materialIcons" ? (
                            <MaterialIcons name={iconName as any} size={32} color="#000" />
                        ) : (
                            <MaterialCommunityIcons name={iconName as any} size={32} color="#000" />
                        )}
                    </View>
                    <Text style={styles.title}>{ name }</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        alignItems: 'center',
        gap: 10,
    },
    iconBox: {
        backgroundColor: '#ececec',
        width: 56,
        height: 56,
        borderRadius: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
    },
});

export default Category;