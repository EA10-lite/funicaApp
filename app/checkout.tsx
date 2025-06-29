import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useCartContext } from "@/context/CartContext";
import { Button, GoBack } from "@/components/main";
import { MiniProductCard } from "@/components/cards";
import { ShippingAddress, ShippingOption } from "@/components/checkout";
import { useSession } from "@/context/AuthContext";
import { EditShippingAddress, EditShippingOptions } from "@/components/modals";
import { AddressDTO, ShippingOptionDTO } from "@/dto/checkout.dto";

const shippingOptions = [
    {
        type: "Economy",
        fee: 10,
        date: "Estimated Arival Dec 20 - 23",
        iconName: "truck-ramp-box"
    },
    {
        type: "Regular",
        fee: 15,
        date: "Estimated Arival Dec 15 - 18",
        iconName: "box"
    },
    {
        type: "Cargo",
        fee: 20,
        date: "Estimated Arival Dec 10 - 13",
        iconName: "truck"
    },
    {
        type: "Express",
        fee: 25,
        date: "Estimated Arival Dec 5 - 8",
        iconName: "truck-fast"
    },
]




const Checkout = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpen2, setIsOpen2] = useState<boolean>(false);

    const { cart } = useCartContext();
    const { user } = useSession();

    const [selectedAddress, setSelectedAddress] = useState<AddressDTO>(user?.address[0] || { type: "No Address", address: "Plese add address."});
    const [selectedOption, setSelectedOption] = useState<ShippingOptionDTO>(shippingOptions[0]);

    const getTotalPrice = () => {
        let price = 0
        for (let item of cart) {
            price += item.price * item.quantity;
        }
        
        return price;
    }

    const getTotalAmount = (shippingFee: number) => {
        let price = getTotalPrice();
        return price + shippingFee;
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.head}>
                    <GoBack label="Checkout" />
                </View>
                <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
                    <View style={styles.body}>
                        <View style={styles.field}>
                            <Text style={styles.fieldTitle}>Shipping Address</Text>
                            <ShippingAddress 
                                isEditable={true} 
                                address={selectedAddress}
                                handleClick={()=> setIsOpen(true)}
                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.fieldTitle}>Orders</Text>
                                {cart?.map((item, index)=> (
                                    <View style={styles.order} key={index}>
                                        <MiniProductCard 
                                            {...item}
                                        />
                                    </View>
                                ))}
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.fieldTitle}>Shipping Options</Text>
                            <ShippingOption
                                option={selectedOption}
                                isEditable={true}
                                handleClick={()=> setIsOpen2(true)}
                            />
                        </View>

                        <View style={[styles.field, styles.total]}>
                            <View style={[styles.row, styles.field, { justifyContent: "space-between"}]}>
                                <Text style={styles.subtitle}>Amount</Text>
                                <Text style={styles.price}>${getTotalPrice()}</Text>
                            </View>
                            <View style={[styles.row, styles.field, { justifyContent: "space-between"}]}>
                                <Text style={styles.subtitle}>Shipping</Text>
                                <Text style={styles.price}>${selectedOption.fee}</Text>
                            </View>
                            <View style={[styles.row, styles.totalField, { justifyContent: "space-between"}]}>
                                <Text style={styles.subtitle}>Total</Text>
                                <Text style={styles.price}>${getTotalAmount(selectedOption.fee)}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Button 
                        label="Procceed to checkout"
                        variant="dark"
                    />
                </View>
            </View>

            <EditShippingAddress 
                isOpen={isOpen}
                closeModal={()=> setIsOpen(false)}
                chooseAddress={(address: AddressDTO)=> setSelectedAddress(address)}
                selectedAddress={selectedAddress}
            />

            <EditShippingOptions 
                isOpen={isOpen2}
                option={selectedOption}
                options={shippingOptions}
                closeModal={()=> setIsOpen2(false)}
                chooseOption={(option: ShippingOptionDTO) => setSelectedOption(option)}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    fieldTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 16,
    },
    order: {
        marginBottom: 16,
    },
    addressContainer: {
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 16,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    total: {
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 16,
    },
    totalField: {
        borderTopColor: '#e3e3e3',
        borderTopWidth: 1,
        paddingTop: 24,
    },
    subtitle: {
        fontSize: 12,
    },
    price: {
        fontSize: 14,
        fontWeight: '600',
    },

    footer: {
        backgroundColor: "#fff",
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        borderTopWidth: 1,
        borderColor: "#e3e3e3",
        paddingHorizontal: 24,
        paddingVertical: 32,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
});

export default Checkout;