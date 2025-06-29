import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { GoBack, NoResult } from "@/components/main";
import products from "@/data/products";
import { Products } from "@/containers";
import { useFavoriteContext } from "@/context/FavoritesContext";

type Product = {
    id:         string;
    title:      string;
    price:      number;
    imageUri:   string;
    rating:     number;
    unitsLeft:  number;
    category:   string;
}

const ProductDetails = () => {
    const { favorites } = useFavoriteContext();
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        const wishlist = products.filter((product) =>
          favorites.some(
            (fav) => fav === product.id.toString().toLowerCase()
          )
        );
        setData(wishlist);
    }, [favorites, products]);      

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <GoBack label={"My Wishlist"} />
            </View>

            <View style={styles.body}>
                { data.length === 0 ? (
                    <NoResult 
                        title="No products found"
                        subtitle="You haven't added any product to your wishlist"
                    />
                ): (
                    <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
                        <Products products={data} />
                    </ScrollView>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    head: {
        marginBottom: 24,
        height: 80,
    },
    view: {
        flex: 1,
    },
    body: {
        paddingHorizontal: 24,
        flexGrow: 1,
    },
    product: {},
});

export default ProductDetails;