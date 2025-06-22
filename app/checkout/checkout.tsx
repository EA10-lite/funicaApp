import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useCartContext } from "@/context/CartContext";
import { Button, GoBack } from "@/components/main";
import { MiniProductCard } from "@/components/cards";
import { ShippingAddress, ShippingOption } from "@/components/checkout";

const Checkout = () => {
    const { cart } = useCartContext();

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <GoBack label="Checkout" />
            </View>
            <ScrollView style={styles.view}>
                <View style={styles.body}>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Shipping Address</Text>
                        <ShippingAddress 
                            isEditable={true} 
                            title="Home"
                            subtitle="123 Home Street"
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
                            title="Choose Shipping Type"
                            isEditable={true}
                        />
                    </View>

                    <View style={[styles.field, styles.total]}>
                        <View style={[styles.row, styles.field, { justifyContent: "space-between"}]}>
                            <Text style={styles.subtitle}>Amount</Text>
                            <Text style={styles.price}>$100</Text>
                        </View>
                        <View style={[styles.row, styles.field, { justifyContent: "space-between"}]}>
                            <Text style={styles.subtitle}>Shipping</Text>
                            <Text style={styles.price}>-</Text>
                        </View>
                        <View style={[styles.row, styles.totalField, { justifyContent: "space-between"}]}>
                            <Text style={styles.subtitle}>Total</Text>
                            <Text style={styles.price}>-</Text>
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