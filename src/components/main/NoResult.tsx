import React from "react";
import {  View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

type NoResultProps = {
    title:      string;
    subtitle:   string;
}

const NoResult = ({ title, subtitle } : NoResultProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.noResult}>
                <Image 
                    source={require("@/assets/images/undraw_no-data.png")} 
                    style={styles.img}
                />
            </View>
            <Text style={styles.title}>{ title }</Text>
            <Text style={styles.subtitle}>{ subtitle }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    noResult: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    img: {
        width: 180,
        height: 180,
        objectFit: 'cover',
    },
    title: {
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '300',
        textAlign: 'center',
        lineHeight: 24,
    },
})

export default NoResult;