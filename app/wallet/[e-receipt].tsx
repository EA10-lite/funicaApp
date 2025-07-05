import { GoBack } from "@/components/main";
import { BarCodeScanner, Receipt } from "@/components/wallet";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const EReceipt = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <GoBack label={"E Receipt"} />
            </View>

            <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    <BarCodeScanner />
                    
                    <Receipt 
                        price={100}
                        shippingFee={25}
                        total={125}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        marginBottom: 24,
        height: 80,
    },
    view: {
        flex: 1,
    },
    body: {
        paddingHorizontal: 24,
        flex: 1,
        paddingBottom: 88,
    }
});


export default EReceipt;