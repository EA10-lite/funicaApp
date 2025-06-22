import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, GoBack } from "@/components/main";
import { ShippingAddress } from "@/components/checkout";

const userAddresses = [
    {
        type: "Home",
        address: "123 Ikeja Road, Lagos Nigeria",
    },
    {
        type: "Office",
        address: "Unilag Road Akoka Yaba",
    },
    {
        type: "Apartment",
        address: "13 Shakiru Yusuf Off Igbe Road, Oreyo Ikorodu",
    },
    {
        type: "School",
        address: "Unilag Road Akoka Yaba",
    }
]

type AddressProps = {
    type:       string;
    address:    string;
}

const EditShippingAddress = () => {
    const [selectedAddress, setSelectedAddress] = useState<AddressProps>(userAddresses[0]);

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <GoBack label="Shipping Address" />
            </View>
            <ScrollView style={styles.view}>
                <View style={styles.body}>
                    { userAddresses.map((address, index)=> (
                        <View style={styles.field} key={index}>
                            <ShippingAddress 
                                key={index}
                                isEditable={false}
                                title={address.type}
                                subtitle={address.address}
                                handleClick={()=> setSelectedAddress(address)}
                                isSelected={address.type === selectedAddress.type} 
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Button 
                    label="Apply"
                    variant="dark"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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