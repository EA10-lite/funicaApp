import React from "react";
import { StyleSheet, View } from "react-native";
import Barcode from "react-native-barcode-svg";

const BarCodeScanner = () => {
    return (
        <View>
            <View style={styles.barcodeSection}>
                <Barcode value="Hello World" format="CODE128" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    barcodeSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
        barcodeNumbers: {
        fontSize: 16,
        marginTop: 5,
    },
})

export default BarCodeScanner;