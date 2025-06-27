import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Button, Favorites, GoBack } from "@/components/main";
import products from "@/data/products";
import { Image } from "expo-image";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useCartContext } from "@/context/CartContext";

type Product = {
    id:         string;
    title:      string;
    price:      number;
    imageUri:   string;
    rating:     number;
    unitsLeft:  number;
    category:   string;
}

const colors = ["#7a5548", "#5f7d89", "#9d28ac", "#019689", "#673abd", "#3e5b12"]

const ProductDetails = () => {
    const { id } = useLocalSearchParams();
    const { addToCart, isInCart, removeFromCart } = useCartContext();
    const [product, setProduct] = useState<Product | undefined | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>("#7a5548");

    useEffect(()=> {
        const product = products.find((product) => product.id === id);
        setProduct(product);
    }, [id]);

    return (
        <View style={styles.container}>
            <GoBack />
            <ScrollView style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image 
                        style={styles.img}
                        source={product?.imageUri}
                    />
                </View>
                <View style={styles.details}>
                    <View style={styles.detailsHeader}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{ product?.title }</Text>
                            <Favorites id={id.toString()} hasWrapper={false}  />
                        </View>

                        <View style={styles.rating}>
                            <View style={styles.itemSold}>
                                <Text style={styles.count}> { product?.unitsLeft } items left </Text>
                            </View>

                            <FontAwesome name="star" size={16} color="black" />
                            <Text style={styles.ratingLabel}>{ product?.rating } (32 reviews) </Text>
                        </View>
                    </View>

                    <View style={styles.detailsBody}>
                        <View style={styles.field}>
                            <Text style={styles.subtitle}>Description</Text>
                            <Text style={styles.paragraph}>
                                This is a detailed description of product {id}. It includes all the features and specifications.
                            </Text>
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.subtitle}>Colors</Text>
                            <View style={[styles.row, { justifyContent: 'flex-start', gap: 4, marginTop: 12,}]}>
                                {colors.map((color, index) => (
                                    <View 
                                        key={index} 
                                        style={[styles.colorBox, { backgroundColor: color }]} 
                                        onTouchStart={() => setSelectedColor(color)}
                                    >
                                        <Pressable onPress={() => setSelectedColor(color)}>
                                            { selectedColor  === color && <Feather name="check" size={24} color="#fff" />}
                                        </Pressable>
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.subtitle}>Quantity</Text>
                        </View>
                    </View>

                    <View style={styles.detailsFooter}>
                        <View>
                            <Text style={styles.paragraph}>Total Price</Text>
                            <Text style={styles.title}>${product?.price}</Text>
                        </View>
                        <View style={{ flexGrow: 1 }}>
                            { product && (isInCart(product?.id) ? (
                                <Button 
                                    label="Remove from Cart"
                                    variant="dark"
                                    onPress={()=> removeFromCart(product?.id) }
                                />
                            ) : (
                                <Button 
                                    label="Add to Cart" 
                                    variant="dark"
                                    onPress={() => addToCart({
                                        title: product?.title,
                                        imageUri: product?.imageUri,
                                        price: product?.price,
                                        id: product?.id,
                                    })} 
                                />
                            ))}
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    product: {
        flex: 1,
    },
    imgContainer: {
        height: 420,
        backgroundColor: "#f3f3f3",
        position: "relative",
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: "100%",
        height: "100%",
        borderRadius: 16,
        resizeMode: "contain",
    },
    details: {
        paddingHorizontal: 24,
        flexGrow: 1,
        paddingVertical: 24,
        height: '60%',
    },
    detailsHeader: {
        marginBottom: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBlockColor: '#f3f3f3',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
    },
    detailsBody: {
        marginBottom: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBlockColor: '#f3f3f3',
    },
    field: {
        marginBottom: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '600',
    },
    paragraph: {
        marginTop: 12,
        fontSize: 14,
        fontWeight: '400',
    },
    rating: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginVertical: 10,
    },
    ratingLabel: {
        fontSize: 12,
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
    colorBox: {
        width: 40, 
        height: 40, 
        borderRadius: 22, 
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        gap: 32,
    },
});

export default ProductDetails;