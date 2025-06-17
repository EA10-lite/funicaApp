import React from "react";
import { Text, StyleSheet } from "react-native";

type labelProps = {
    label:      string;
}
const Label = ({ label } : labelProps) => {
    return (
        <Text style={styles.label}>{ label }</Text>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 14, 
        fontWeight: 500,
        marginBottom: 4,
    }
})

export default Label;