import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet, Pressable} from "react-native";

type FavoritesProps = {
    id:     string;
}

const Favorites = ({ id } : FavoritesProps) => {
    const [favorites, setFavorites] = useState<string[]>([]);

    const toggleFavorites = () => {
        if(favorites.includes(id)) {
            setFavorites(prevFavorites => prevFavorites.filter(item => item !== id));
        }
        else {
            const tempFavorites = [...favorites, id];
            setFavorites(tempFavorites);
        }
    }


    return (
        <View style={styles.favorite}>
            <Pressable onPress={toggleFavorites}>
                { favorites.includes(id) ? (
                    <MaterialCommunityIcons name="cards-heart" size={24} color="#fff" />
                ) : (
                    <MaterialCommunityIcons name="cards-heart-outline" size={24} color="#fff" />
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
    },
})

export default Favorites;