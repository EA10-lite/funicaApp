import { ProductCard } from "@/components/cards";
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";


type ProductsProps = {
    products: Product[];
}

type Product = {
    id:         string;
    title:      string;
    price:      number;
    rating:     number;
    imageUri:   string;
    unitsLeft:  number;
    category:   string;
}

const Products = ({ products } : ProductsProps) => {
    return (
        <View style={styles.products}>
            { products.map((product, index)=> (
                <ProductCard 
                    {...product}
                    key={index}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    products: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingHorizontal: 24,
        rowGap: 24,
        marginBottom: 100,
    }
});


export default Products;