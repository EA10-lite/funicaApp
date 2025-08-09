import { FontAwesome6 } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";


type PaymentOptionProps = {
    title:          string;
    balance?:       number;
    handleClick?:   ()=> void;
    isSelected?:    boolean;
    iconName?:      string;
}

const PaymentOption = ({ 
    title,
    balance,
    handleClick, 
    isSelected, 
    iconName="wallet"
}: PaymentOptionProps) => {
    return (
        <View style={[styles.addressContainer, styles.row, { paddingVertical: 18}]}>
            <View style={styles.row}>
                <FontAwesome6 name={iconName} size={24} color="#000" />

                <View style={{ marginLeft: 8 }}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
            
            <View style={[styles.row, { gap: 12 }]}>
                {balance && <Text style={styles.title}>${balance}</Text>}
                <Pressable onPress={handleClick}>
                    <View style={[styles.outerCheckBox, styles.row]}>
                        {isSelected && <View style={styles.innerCheckBox} />}
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addressContainer: {
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 16,
        marginBottom: 16,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    innerIconBox: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 14,
        fontWeight: "600",
        color: "#000",
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "400",
        marginTop: 4,
    },
    outerCheckBox: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#e3e3e3",
        justifyContent: "center",
    },
    innerCheckBox: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#000"
    },
})

export default PaymentOption;