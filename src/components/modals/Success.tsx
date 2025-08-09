import React from "react";
import { Modal, StyleSheet, View } from "react-native";

type SuccessModalProps = {
    isOpen:     boolean;
}

const Success = ({ } : SuccessModalProps) => {
    return (
        <Modal style={styles.container} animationType="fade">
            <View style={styles.modalContent}></View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {},
    modalContent: {},
})

export default Success;