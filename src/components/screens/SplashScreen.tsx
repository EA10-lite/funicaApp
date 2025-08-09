import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Loading, Logo } from '../main';
import { Colors } from '@/constants/Colors';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.logoContainer}>
                    <Logo size='sm' variant='dark' />
                </View>
                <Text style={styles.brand}> Funica </Text>
            </View>


            <View style={styles.footer}>
                <Loading />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.dark.bg,
        position: "relative",
    },
    brand: {
        color: "#fff",
        fontSize: 56,
        fontWeight: 500,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: "50%",
        width: 56,
        height: 56
    },
    footer: {
        position: "absolute",
        bottom: 64,
    },
});

export default SplashScreen;
