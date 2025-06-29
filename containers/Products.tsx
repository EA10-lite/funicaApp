import React from "react";
import { ProductCard } from "@/components/cards";
import { ProductDTO } from "@/dto/product.dto";
import { View, StyleSheet } from "react-native";


type ProductsProps = {
    products: ProductDTO[];
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
        rowGap: 24,
        marginBottom: 100,
    }
});


export default Products;