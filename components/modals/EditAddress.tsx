import React, { PropsWithChildren } from "react";
import { View, StyleSheet, Text, Modal, KeyboardAvoidingView, Platform } from "react-native";
import { Formik } from "formik";
import { Field, Submit } from "../forms";
import { AddressDTO } from "@/dto/checkout.dto";
import { AntDesign } from "@expo/vector-icons";


type EditAddressProps = PropsWithChildren<{
    closeModal:         ()=> void;
    isOpen:             boolean;
    title:              string;
    selectedAddress?:   AddressDTO | null;
}>;

const Address = ({ closeModal, isOpen, title, selectedAddress } : EditAddressProps) => {
    return (
        <Modal animationType="slide" transparent={true} visible={isOpen}>
            <View style={styles.modalContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1, justifyContent: 'flex-end' }}
                >
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.title}>{title}</Text>
                            <AntDesign name="close" size={24} color="black" onPress={closeModal} />
                        </View>

                        <View style={styles.modalBody}>
                            <Formik
                                initialValues={{ 
                                    type: selectedAddress?.type || "", 
                                    address: selectedAddress?.address || ""
                                }}
                                onSubmit={(values)=> console.log(values)}
                            >
                                {()=> (
                                    <View>
                                        <Field 
                                            name="type"
                                            type="default"
                                            label="Address Name"
                                        />
                                        <Field 
                                            name="address"
                                            type="default"
                                            label="Address Details"
                                        />

                                        <View style={styles.modalFooter}>
                                            <Submit 
                                                label="Add"
                                                loading={false}
                                            />
                                        </View>
                                    </View>
                                )}
                            </Formik>
                        </View>

                    </View>
                </KeyboardAvoidingView>
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
        backgroundColor: '#fff',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 24,
    },
    modalHeader: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingVertical: 24,
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBlockColor: '#f3f3f3',
        backgroundColor: '#fcfcfc'
    },
    title: {
        fontSize: 20,
        fontWeight: '600', 
    },
    modalBody: {
        flexGrow: 1,
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderBlockColor: '#f3f3f3',
    },
    modalFooter: {
        paddingVertical: 24,
    },
})

export default Address;