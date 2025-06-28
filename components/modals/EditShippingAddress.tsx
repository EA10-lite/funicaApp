import React, { PropsWithChildren, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, GoBack } from "@/components/main";
import { ShippingAddress } from "@/components/checkout";
import Modal from "react-native-modal";
import { useSession } from "@/context/AuthContext";
import { AddressDTO } from "@/dto/checkout.dto";

type EditShippingAddressProps = PropsWithChildren<{
    isOpen:             boolean;
    selectedAddress:    AddressDTO;
    closeModal:         ()=> void;
    chooseAddress:      (address: AddressDTO)=> void;
}>;

const EditShippingAddress = ({ isOpen, closeModal, selectedAddress, chooseAddress}: EditShippingAddressProps) => {
    const { user } = useSession();
    const [isSelectedAddress, setIsSelectedAddress] = useState<AddressDTO>(selectedAddress);

    const handleClick = () => {
        chooseAddress(isSelectedAddress);
        closeModal();
    }

    return (
        <Modal
            isVisible={isOpen}
            animationIn="slideInRight"
            animationOut="slideOutRight"
            onBackdropPress={closeModal}
            backdropOpacity={0}
            style={{ margin: 0 }}
        >
            <View style={styles.container}>
                <View style={styles.head}>
                    <GoBack 
                        label="Shipping Address" 
                        handlePress={closeModal}
                    />
                </View>
                <ScrollView style={styles.view}>
                    <View style={styles.body}>
                        { user?.address.map((address, index)=> (
                            <View style={styles.field} key={index}>
                                <ShippingAddress 
                                    address={address}
                                    key={index}
                                    isEditable={false}
                                    handleClick={()=> setIsSelectedAddress(address)}
                                    isSelected={address.type === isSelectedAddress.type} 
                                />
                            </View>
                        ))}
                    </View>
                </ScrollView>

                <View style={styles.footer}>
                    <Button 
                        label="Apply"
                        variant="dark"
                        onPress={handleClick}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    view: {
        flex: 1,
        paddingVertical: 20,
    },
    head: {
        height: 80,
        marginBottom: 24,
    },
    body: {
        paddingHorizontal: 24,
    },
    field: {
        marginBottom: 16,
    },
    footer: {
        position: 'absolute',
        bottom: 44,
        width: '100%',
        paddingHorizontal: 24,
    },
});

export default EditShippingAddress;