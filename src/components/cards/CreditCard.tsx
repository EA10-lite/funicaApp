import { Ionicons } from '@expo/vector-icons';
import { ImageBackground } from 'expo-image';
import React from 'react';
import {
    Dimensions,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

const CreditCard = () => {
    return (
        <ImageBackground 
            source={require("@/assets/images/credit-card.jpg")}
            style={styles.imgBg}
        >
            <View style={styles.card}>
            <View style={styles.topRow}>
                <Text style={styles.name}>Andrew Ainsley</Text>
                <View style={styles.cardLogos}>
                    {/* <Image
                        source={require('@/assets/images/visa.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('@/assets/images/mastercard.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    /> */}
                </View>
            </View>

            <Text style={styles.cardNumber}>•••• •••• •••• 3629</Text>

            <View style={styles.row}>
                <View>
                    <Text style={styles.balanceLabel}>Your balance</Text>
                    <Text style={styles.balance}>$9,379</Text>
                </View>

                <Pressable>
                    <View style={styles.button}>
                        <Ionicons name="download" size={24} color="black" />
                        <Text style={styles.buttonText}>Top Up</Text>
                    </View>
                </Pressable>
            </View>

            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imgBg: {
        borderRadius: 20,
        overflow: "hidden",
    },
    card: {
        backgroundColor: '#ffffff22',
        padding: 20,
        width: width - 40,
        alignSelf: 'center',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    cardLogos: {
        flexDirection: 'row',
        gap: 10,
    },
    logo: {
        width: 40,
        height: 25,
    },
    cardNumber: {
        color: '#fff',
        fontSize: 16,
        marginTop: 15,
        letterSpacing: 2,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    balanceLabel: {
        color: '#ccc',
        marginTop: 25,
        fontSize: 14,
    },
    balance: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 5,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    buttonText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 16,
    },
});

export default CreditCard;
