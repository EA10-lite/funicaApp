import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { GoBack, NoResult } from "@/src/components/main";
import products from "@/src/data/products";
import { Products } from "@/containers";
import { CustomScrollView } from "@/layout";

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
    const { category } = useLocalSearchParams();
    const [data, setData] = useState<Product[]>([]);

    useEffect(()=> {
        const product = products.filter(
            (product) => product.category.toLowerCase() === category.toString().toLowerCase()
        );
        setData(product);
    }, [category]);

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                { category && <GoBack label={category?.toString()} /> }
            </View>

            <View style={styles.body}>
                { data.length === 0 ? (
                    <NoResult 
                        title="No products found"
                        subtitle="We couldn't find any products in this category."
                    />
                ): (
                    <CustomScrollView>
                        <Products products={data} />
                    </CustomScrollView>
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
        position: "relative",
        height: 80,
    },
    body: {
        paddingHorizontal: 24,
        flexGrow: 1,
    },
    view: {
        flex: 1,
    },
});

export default ProductDetails;