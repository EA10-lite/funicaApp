import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FormikValues, useFormikContext } from "formik";

type checkboxProps = {
    label:   string;
    name:    string;
}

const Checkbox = ({ label, name } : checkboxProps) => {
    const { values, setFieldValue} = useFormikContext<FormikValues>();
    const handlePress = () => {
        setFieldValue(name, !values[name]);
    }
    return (
        <View style={styles.checkbox}>
            <TouchableOpacity onPress={handlePress}>
                <View style={[styles.box, values[name] && styles.active]}>
                    { values[name] && <Feather name="check" size={16} color="#fff" /> }
                </View>
            </TouchableOpacity>
            <Text style={styles.label}>{ label }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    box: {
        width:20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    active: {
        backgroundColor: "#000"
    },
    label: {
        fontSize: 14,
        fontWeight: 600,
        color: ""
    },
})

export default Checkbox;