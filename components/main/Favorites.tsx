import { useFavoriteContext } from "@/context/FavoritesContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet, Pressable} from "react-native";

type FavoritesProps = {
    id:         string;
    hasWrapper?: boolean;
}

const Favorites = ({ id, hasWrapper = true} : FavoritesProps) => {
    const { isInFavorites, toggleFavorites } = useFavoriteContext();

    return (
        <View style={[hasWrapper && styles.favorite]}>
            <Pressable onPress={()=> toggleFavorites(id)}>
                { isInFavorites(id) ? (
                    <MaterialCommunityIcons name="cards-heart" size={24} color={hasWrapper ? "#fff" : "#000"} />
                ) : (
                    <MaterialCommunityIcons name="cards-heart-outline" size={24} color={hasWrapper ? "#fff" : "#000"} />
                )}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    favorite: {
        width: 36,
        height: 36,
        borderRadius: '50%',
        position: 'absolute',
        top: 16,
        right: 16,
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
    },
})

export default Favorites;