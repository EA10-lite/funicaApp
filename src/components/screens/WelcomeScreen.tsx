import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Colors } from '@/constants/Colors';
import { ImageBackground } from 'expo-image';


const imgBackground = require("@/assets/images/img-3.jpg");

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={imgBackground} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default WelcomeScreen;
