import React, { useEffect, useRef } from 'react';
import {Animated, Easing, View, Text, StyleSheet} from 'react-native';
import { Logo } from '../main';
import { Colors } from '@/constants/Colors';
import { AntDesign, EvilIcons, FontAwesome } from '@expo/vector-icons';

const SplashScreen = () => {
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1, 
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, [spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });


    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.logoContainer}>
                    <Logo size='sm' variant='dark' />
                </View>
                <Text style={styles.brand}> Funica </Text>
            </View>


            <View style={styles.footer}>
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                    <AntDesign name="loading1" size={32} color="#fff" />
                </Animated.View>
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
