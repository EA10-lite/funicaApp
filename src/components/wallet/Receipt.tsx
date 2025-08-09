import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ReceiptProps = {
    total:          number;
    price:          number;
    shippingFee:    number;
}

const Receipt = ({ total, price, shippingFee } : ReceiptProps) => {
    return (
        <View>
            <View style={styles.field}>
                <View style={[styles.row, { justifyContent: "space-between", marginBottom: 24 }]}>
                    <Text style={styles.subtitle}>Amount</Text>
                    <Text style={styles.title}>${price}</Text>
                </View>
                <View style={[styles.row, { justifyContent: "space-between", marginBottom: 24 }]}>
                    <Text style={styles.subtitle}>Shipping</Text>
                    <Text style={styles.title}>${shippingFee}</Text>
                </View>
                <View style={[styles.row, styles.totalField, { justifyContent: "space-between"}]}>
                    <Text style={styles.subtitle}>Total</Text>
                    <Text style={styles.title}>${total}</Text>
                </View>
            </View>

            <View style={styles.field}>
                <View style={[styles.row, { justifyContent: "space-between", marginBottom: 24}]}>
                    <Text style={styles.subtitle}>Payment Methods</Text>
                    <Text style={styles.title}>E-Shipping</Text>
                </View>
                <View style={[styles.row,{ justifyContent: "space-between", marginBottom: 24}]}>
                    <Text style={styles.subtitle}>Date</Text>
                    <Text style={styles.title}>Dec 15, 2025</Text>
                </View>
                <View style={[styles.row,{ justifyContent: "space-between", marginBottom: 24}]}>
                    <Text style={styles.subtitle}>Transaction ID</Text>
                    <Text style={styles.title}>SKEY784BE7</Text>
                </View>
                <View style={[styles.row,{ justifyContent: "space-between" }]}>
                    <Text style={styles.subtitle}>Status</Text>

                    <View style={styles.status}>
                        <Text style={[styles.subtitle, { color: "#fff" }]}>Paid</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        marginBottom: 24,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 16,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    totalField: {
        borderTopColor: '#e3e3e3',
        borderTopWidth: 1,
        paddingTop: 24,
    },
    subtitle: {
        fontSize: 12,
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
    },
    status: {
        backgroundColor: "#000",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
});

export default Receipt;