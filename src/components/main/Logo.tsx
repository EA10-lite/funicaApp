import React from "react";
import { View, StyleSheet } from "react-native";

type LogoProps = {
    size?:       'xs' | 'sm' | 'lg';
    variant?:   'dark' | 'light',
    hasText?:   boolean;
}

const Logo = ({ size = 'sm', variant = "light", hasText} : LogoProps) => {
    const width = size === 'xs' ? 10 : size === 'sm' ? 12 : 32;
    const height = size === 'xs' ? 7 :  size === 'sm' ? 9 : 20;
    const rounderCorners = size === 'xs' ? 6 :  size === 'sm' ? 8 : 24;
    const marginBottom = size === 'xs' ? 3 :  size === 'sm' ? 3 : 10;
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