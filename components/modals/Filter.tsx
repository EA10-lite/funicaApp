import React, { PropsWithChildren} from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Modal, StyleSheet, View, Text, Pressable } from "react-native";

type FilterProps = PropsWithChildren<{
    isVisible:  boolean;
    onClose:      () => void;
}>;

const Filter = ({ isVisible, children, onClose }: FilterProps) => {
    return (
        <View style={styles.modalContainer}>
             <Modal animationType="slide" transparent={true} visible={isVisible}>
                <View style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color="#fff" size={22} />
                    </Pressable>
                    </View>
                    {children}
                </View>
            </Modal>
        </View>
    )
}

const styles  = StyleSheet.create({
    modalContainer: {},
    modalContent: {},
    titleContainer: {},
    title: {},

});

export default Filter;