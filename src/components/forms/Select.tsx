import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FormikValues, useFormikContext } from "formik";
import Label from "./Label";


type SelectProps = {
    label?:         string;
    options:        string[];
    name:           string;
    placeholder:    string;
}

const Select = ({ label, options, name, placeholder } : SelectProps) => {
    const { values, errors, handleChange, setFieldValue } = useFormikContext<FormikValues>();
    const [isPickerVisible, setIsPickerVisible] = useState(false);

    return (
        <View style={styles.container}>
            { label && <Label label={label} /> }

            <Pressable
                style={styles.dropdown}
                onPress={() => setIsPickerVisible(true)}
            >
                <Text style={styles.dropdownText}>
                    {values[name] || placeholder}
                </Text>
            </Pressable>


            <Modal
                visible={isPickerVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setIsPickerVisible(false)}
            >
                <View style={styles.modalContainer}>
                <View style={styles.pickerContainer}>
                    <Picker
                    selectedValue={values[name]}
                    onValueChange={(itemValue) => {
                        setFieldValue(name, itemValue);
                        setIsPickerVisible(false);
                    }}
                    >
                        { options?.map((option, index)=> (
                            <Picker.Item label={option} value={option} key={index} />
                        ))}
                    </Picker>
                </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    dropdown: {
        backgroundColor: "#fafafa",
        borderRadius: 16,
        paddingHorizontal: 18,
        paddingVertical: 16,
    },
    dropdownText: {
        fontSize: 15,
    },
    selected: {
        marginTop: 10,
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    pickerContainer: {
        backgroundColor: "#fff",
        paddingBottom: 20,
        paddingTop: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
});

export default Select;