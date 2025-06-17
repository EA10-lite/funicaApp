import React from "react";
import { View, StyleSheet } from "react-native";

type LogoProps = {
    size:       'sm' | 'lg';
    variant?:   'dark' | 'light',
    hasText?:   boolean;
}

const Logo = ({ size, variant = "light", hasText} : LogoProps) => {
    const width = size === 'sm' ? 12 : 32;
    const height = size === 'sm' ? 9 : 20;
    const rounderCorners = size === 'sm' ? 8 : 24;
    const marginBottom = size === 'sm' ? 3 : 10;
    const backgroundColor = variant === "dark" ? "#000" : "#fff";

    return (
        <View style={styles.logoContainer}>
            <View 
                style={[
                    styles.logo, 
                    { 
                        width: width * 3, 
                        height, 
                        borderTopRightRadius: rounderCorners, 
                        borderBottomLeftRadius: rounderCorners,
                        marginBottom,
                        backgroundColor
                    }
                ]} 
            />
            <View 
                style={[
                    styles.logo, 
                    { 
                        width: width * 2, 
                        height, 
                        borderTopRightRadius: rounderCorners, 
                        borderBottomLeftRadius: rounderCorners,
                        marginBottom, 
                        backgroundColor,
                    }
                ]} 
            />
            <View 
                style={[
                    styles.logo, 
                    { 
                        width, 
                        height, 
                        borderTopRightRadius: rounderCorners, 
                        borderBottomLeftRadius: rounderCorners,
                        marginBottom, 
                        backgroundColor,
                    }
                ]} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer: {},
    logo: {
        height: 10,
        backgroundColor: "#ffff",
        marginBottom: 6,
    },
})

export default Logo;