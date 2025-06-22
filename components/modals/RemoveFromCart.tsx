import React, { PropsWithChildren } from "react";
import { View, StyleSheet, Text, Modal, Pressable } from "react-native";
import { Button } from "../main";
import { CartItem, useCartContext } from "@/context/CartContext";
import { MiniProductCard } from "../cards";


type RemoveFromCartProps = PropsWithChildren<{
    closeModal:     ()=> void;
    isOpen:         boolean;
    item:           CartItem;
}>;

const RemoveFromCart = ({ closeModal, children, isOpen, item } : RemoveFromCartProps) => {
    const {removeFromCart} = useCartContext();

    const handleRemoveFromCart = ()=> {
        removeFromCart(item.id);
        closeModal();
    }

    return (
        <Modal animationType="slide" transparent={true} visible={isOpen}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.title}>Remove From Cart?</Text>
                    </View>

                    <View style={styles.modalBody}>
                        <MiniProductCard 
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            imageUri={item.imageUri}
                            quantity={item.quantity}
                        />
                    </View>

                    <View style={styles.modalFooter}>
                        <Pressable onPress={closeModal} style={styles.cancelBtn}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </Pressable>

                        <Button 
                            label="Yes, Remove"
                            onPress={handleRemoveFromCart}
                            variant="dark"
                        />
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

export default RemoveFromCart;