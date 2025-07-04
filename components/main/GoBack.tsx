import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

type goBackProps = {
    label?:  string;
    handlePress?: () => void;
}

const GoBack = ({ label, handlePress} : goBackProps) => {
    const navigation = useNavigation();

    return (
        <View style={styles.row}>
            <Pressable onPress={()=> handlePress ? handlePress() : navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black"  />
            </Pressable>
            { label && <Text style={styles.label}>{ label }</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        width: '100%',
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        gap: 16,
        position: 'absolute',
        top: 64,
        paddingHorizontal: 24,
        paddingBottom: 16,
        zIndex: 10,
    },
    label: {
        fontSize: 18,
        textTransform: 'capitalize',
        fontWeight: '600',
    }
})

export default GoBack;