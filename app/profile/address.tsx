import React, { useState } from "react";
import { ShippingAddress } from "@/components/checkout";
import { Button, GoBack, NoResult } from "@/components/main";
import { useSession } from "@/context/AuthContext";
import { ScrollView, StyleSheet, View } from "react-native";
import { EditAddress as EditAddressModal } from "@/components/modals";
import { AddressDTO } from "@/dto/checkout.dto";

const EditAddress = () => {
    const { user } = useSession();
    const [isOpen, setOpen] = useState<boolean>(false);
    const [selectedAddress, setSelectedAddress] = useState<AddressDTO | null>(null);

    const handleSelectClick = (address: AddressDTO) => {
        setSelectedAddress(address);
        setOpen(true);
    }
    const handleModalClose = () => {
        setSelectedAddress(null);
        setOpen(false);
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.head}>
                    <GoBack label="Edit Address" />
                </View>

                {user && user?.address?.length > 0 ? (
                    <ScrollView style={styles.view}>
                        <View style={styles.body}>
                            { user?.address.map((address, index)=> (
                                <View style={styles.field} key={index}>
                                    <ShippingAddress 
                                        address={address}
                                        key={index}
                                        isEditable={true}
                                        handleClick={()=> handleSelectClick(address)} 
                                    />
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                ) : (
                    <View style={styles.view}>
                        <NoResult 
                            title="No Address"
                            subtitle="You've not added any address yet, click on the button below to add new address"
                        />
                    </View>
                )}


                <View style={styles.footer}>
                    <Button 
                        label="Add New Address"
                        variant="dark"
                        onPress={()=> setOpen(true)}
                    />
                </View>
            </View>

            <EditAddressModal
                isOpen={isOpen}
                closeModal={()=> handleModalClose()}
                title={selectedAddress ? "Edit Address" : "Add New Address"}
                selectedAddress={selectedAddress}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3f3",
    },
    view: {
        flex: 1,
        paddingVertical: 24,
    },
    head: {
        height: 80,
        marginBottom: 24,
    },
    body: {
        paddingHorizontal: 24,
        paddingBottom: 120,
    },
    
    field: {
        marginBottom: 24,
    },
    footer: {
        position: 'absolute',
        bottom: 44,
        width: '100%',
        paddingHorizontal: 24,
    },
});

export default EditAddress;