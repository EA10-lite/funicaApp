import { useAuthContext } from "@/context/AuthContext";
import { router } from "expo-router";
import React, { PropsWithChildren } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "../main";


type LogoutProps = PropsWithChildren<{
    closeModal:     ()=> void;
    isOpen:         boolean;
}>;

const Logout = ({ closeModal, isOpen } : LogoutProps) => {
    const { signOut } = useAuthContext();

    const handleSignout = () => {
        signOut();
        router.replace("/auth");
    }

    return (
        <Modal animationType="slide" transparent={true} visible={isOpen}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={[styles.title, { color: "#fa0000" }]}>Logout</Text>
                    </View>

                    <View style={styles.modalBody}>
                        <Text style={styles.title}>Are you sure you want to log out ?</Text>
                    </View>

                    <View style={styles.modalFooter}>
                        <View style={styles.btnContainer}>
                            <Pressable onPress={closeModal} style={styles.cancelBtn}>
                                <Text style={styles.btnText}>Cancel</Text>
                            </Pressable>
                        </View>

                        <View style={styles.btnContainer}>
                            <Button 
                                label="Logout"
                                variant="dark"
                                onPress={handleSignout}
                            />
                        </View>

                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000aa',
    },
    modalContent: {
        width: '100%',
        backgroundColor: '#fcfcfc',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 24,
    },
    modalHeader: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderBlockColor: '#f3f3f3',
        backgroundColor: '#fcfcfc'
    },
    title: {
        fontSize: 20,
        fontWeight: '600', 
        textAlign: 'center',
    },
    modalBody: {
        flexGrow: 1,
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderBlockColor: '#f3f3f3',
    },
    btnContainer: {
        width: '50%',
    },
    cancelBtn: {
        minWidth: '35%',
        flexGrow: 1,
        flex: 0.5,
        backgroundColor: "#e7e7e7",
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderRadius: 133,
    },
    btnText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    modalFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 24,
    },
})

export default Logout;