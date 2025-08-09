import React from "react";
import { StyleSheet, View } from "react-native";

type LogoLineProps = {
    width:                      number;
    height:                     number;
    borderBottomLeftRadius:     number;
    borderTopRightRadius:       number;
}

const LogoLine = ({ width, height, borderBottomLeftRadius, borderTopRightRadius } : LogoLineProps) => {
    return (
        <View 
            style={[
                styles.logo,
                { 
                    width, 
                    height, 
                    borderBottomLeftRadius,
                    borderTopRightRadius,
                }
            ]} 
        />
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 10,
        backgroundColor: "#ffff",
        marginBottom: 6,
    },
})

export default LogoLine;