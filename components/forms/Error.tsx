import React from "react";
import { Feather } from "@expo/vector-icons";
import { Text, StyleSheet, View } from "react-native";

type errorProps = {
    visible:        boolean;
    error?:         string | null;
}


const Error = ({ error, visible} : errorProps) => {
    if(!visible || !error) return null;
    
    return (
        <View style={styles.row}>
            <Feather name="info" size={16} color="#ff0000" />
            <Text style={styles.error}>{ error }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    error: {
        color: "#ff0000"
    }
})

export default Error;