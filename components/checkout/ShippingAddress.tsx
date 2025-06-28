import React, { useState } from "react";
import { router } from "expo-router";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { EditShippingAddress } from "../modals";
import { AddressDTO } from "@/dto/checkout.dto";


type ShippingAddressProps = {
    address:             AddressDTO,
    isEditable:         boolean;
    handleClick:        ()=> void;
    isSelected?:        boolean;
}

const ShippingAddress = ({ 
    address,
    isEditable=false, 
    handleClick, 
    isSelected,
} : ShippingAddressProps) => {

    return (
        <View style={[styles.addressContainer, styles.row]}>
            <View style={[styles.row, styles.address]}>
                <View style={styles.outerIconBox}>
                    <View style={styles.innerIconBox}>
                        <MaterialIcons name="location-on" size={20} color="#fff" />
                    </View>
                </View>

                <View style={{ marginLeft: 8 }}>
                    <Text style={styles.title}>{address.type}</Text>
                    <Text style={styles.subtitle}>{address.address}</Text>
                </View>
            </View>

            <View style={styles.checkbox}>    
                { isEditable ? (
                    <Pressable onPress={handleClick}>
                        <AntDesign name="edit" size={20} color="black" />
                    </Pressable> 
                ) : (
                    <Pressable onPress={handleClick}>
                        <View style={[styles.outerCheckBox, styles.row]}>
                            {isSelected && <View style={styles.innerCheckBox} />}
                        </View>
                    </Pressable>
                )}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    addressContainer: {
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 16,
    },
    address: {
        width: '80%'
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    outerIconBox: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#e3e3e3",
        justifyContent: "center",
        alignItems: "center",
    },
    innerIconBox: {
        width: 36,
        height: 36,
        borderRadius: 20,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 14,
        fontWeight: "600",
        color: "#000",
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "400",
    },
    checkbox: {
    },
    outerCheckBox: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#e3e3e3",
        justifyContent: "center",
    },
    innerCheckBox: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#000"
    },
});


export default ShippingAddress;