import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

const Contact = () => {
    return (
        <View style={styles.contact}>

            <Field icon="headphones" title="Customer Support" />
            <Field icon="whatsapp" title="Whatsapp" />
            <Field icon="globe" title="Website" />
            <Field icon="facebook" title="Facebook" />
            <Field icon="twitter" title="Twitter" />
            <Field icon="square-instagram" title="Instagram" />
        </View>
    )
}

type FieldProps = {
    title:  string;
    icon:   string;
}

const Field = ({title, icon}: FieldProps) => { 
    return (
        <View style={styles.field}>
            <FontAwesome6 name={icon} size={24} color="black" />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    contact: {},
    field: {
        backgroundColor: "#fff",
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        marginBottom: 24,
        padding: 18,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Contact;