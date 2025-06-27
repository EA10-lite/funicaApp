import React from "react";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SpecialOffer } from "@/components/cards";
import offers from "@/data/offers";

const SpecialOffers = () => {
    return (
        <View style={styles.offers}>
            <View style={styles.row}>
                <Text style={styles.title}>Special Offers</Text>
                <Link href="/" style={styles.link}>See All</Link>
            </View>

            <View style={styles.products}>
                {offers.map((offer)=> (
                    <SpecialOffer 
                        key={offer.id} 
                        discount={offer.discount}
                        imageUri={offer.imageUri}
                    />
                ))}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    offers: {
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    link: {
        fontSize: 16,
        fontWeight: '600',
    },
    products: {
        flexDirection: 'row',
        overflow: 'hidden',
    },
});

export default SpecialOffers;