import { PaymentOption } from "@/components/checkout";
import { Button, GoBack } from "@/components/main";
import { EnterPin } from "@/components/modals";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const Payment = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>("wallet");

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <GoBack label={"Payment Methods"} />
            </View>

            <ScrollView style={styles.view}>
                <View style={styles.body}>
                    <PaymentOption 
                        title="My Wallet"
                        balance={973}
                        iconName={"wallet"}
                        handleClick={()=> setSelectedOption("wallet")}
                        isSelected={selectedOption === "wallet"}
                    />

                    <PaymentOption 
                        title="PayPal"
                        iconName={"paypal"}
                        handleClick={()=> setSelectedOption("paypal")}
                        isSelected={selectedOption === "paypal"}
                    />

                    <PaymentOption 
                        title="Google Pay"
                        iconName={"google"}
                        handleClick={()=> setSelectedOption("google")}
                        isSelected={selectedOption === "google"}
                    />

                    <PaymentOption 
                        title="Apple Pay"
                        iconName={"apple"}
                        handleClick={()=> setSelectedOption("apple")}
                        isSelected={selectedOption === "apple"}
                    />
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Button 
                    label="Apply"
                    variant="dark"
                    onPress={()=> setOpen(true)}
                />
            </View>


            <EnterPin 
                isOpen={open}
                closeModal={()=> setOpen(false)}
            />
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
        marginBottom: 24,
        height: 80,
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


export default Payment;