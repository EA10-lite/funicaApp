import React from "react";
import { router } from "expo-router";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";


type ShippingAddressProps = {
    isEditable:     boolean;
    handleClick?:   ()=> void;
    title:          string;
    subtitle:       string;
    isSelected?:    boolean;
}

const ShippingAddress = ({ isEditable=false, title, subtitle, handleClick, isSelected} : ShippingAddressProps) => {
    return (
        <View style={[styles.addressContainer, styles.row]}>
            <View style={[styles.row, styles.address]}>
                <View style={styles.outerIconBox}>
                    <View style={styles.innerIconBox}>
                        <MaterialIcons name="location-on" size={20} color="#fff" />
                    </View>
                </View>

                <View style={{ marginLeft: 8 }}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>

            <View style={styles.checkbox}>    
                { isEditable ? (
                    <Pressable onPress={()=> router.push("/checkout/edit-shipping-address")}>
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