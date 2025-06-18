import React from "react";
import { Image } from "expo-image";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Favorites } from "../main";

type ProductCardProps = {
    id:         string;
    price:      string;
    title:      string;
    rating:     number;
    imageUri:   string;
}

const ProductCard = ({
    id,
    price,
    title,
    rating,
    imageUri,
} : ProductCardProps) => {
    return (
        <View style={styles.card}>
            <View style={styles.imgContainer}>
                <Favorites id={id} />
            </View>
            <View style={styles.cardDetails}>
                <Text style={styles.title}>{ title }</Text>
                <View style={styles.rating}>
                    <FontAwesome name="star" size={16} color="black" />
                    <Text style={styles.ratingLabel}>{ rating }</Text>

                    <View style={styles.itemSold}>
                        <Text style={styles.count}> 7,843 sold </Text>
                    </View>
                </View>
                <Text style={styles.price}>{ price }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '47%',
    },
    imgContainer: {
        backgroundColor: "#f3f3f3",
        borderRadius: 16,
        width: '100%',
        margin: 'auto',
        height: 180,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        position: 'relative',
    },
    cardDetails: {},
    rating: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginVertical: 10,
    },
    ratingLabel: {
        fontSize: 14,
        fontWeight: '400',
    },
    itemSold: {
        backgroundColor: '#f3f3f3',
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 6,
    },
    count: {
        fontSize: 12,
        fontWeight: '400'
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ProductCard;