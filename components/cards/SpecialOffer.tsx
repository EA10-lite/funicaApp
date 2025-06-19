import React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

type SpecialOfferProps = {
    imageUri:   string;
    discount:   number;
}

const SpecialOffer = ({ imageUri, discount } :  SpecialOfferProps) => {
    return (
        <View style={styles.offer}>
            <View style={styles.details}>
                <Text style={styles.discount}>{ discount }%</Text>
                <Text style={styles.discountLabel}>Today's Special</Text>
                <Text style={styles.countdownLabel}>Get discount for every order only valid for today</Text>
            </View>
            <View style={styles.imgContainer}>
                <Image 
                    source={imageUri} 
                    style={styles.img} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    offer: {
        width: '100%',
        backgroundColor: "#e7e7e7",
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 24,
    },
    imgContainer: {
        flex: 0.5,
    },
    img: {
        width: 150,
        height: 180,
        objectFit: 'cover',
    },
    details: {
        width: '50%',
        paddingBottom: 20,
    },
    discount: {
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 12,
    },
    discountLabel: {
        fontSize: 16,
        fontWeight: '600'
    },
    countdownLabel: {
        marginTop: 16,
        fontSize: 12,
        fontWeight: '500'
    }
});

export default SpecialOffer;