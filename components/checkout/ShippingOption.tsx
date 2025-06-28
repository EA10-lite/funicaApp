import { ShippingOptionDTO } from "@/dto/checkout.dto";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Pressable } from "react-native";


type ShippingOptionProps = {
    option:         ShippingOptionDTO
    isEditable:     boolean;
    handleClick?:   ()=> void;
    isSelected?:    boolean;
    iconName?:      string
}

const ShippingOptions = ({ 
    option,
    isEditable,
    handleClick, 
    isSelected, 
    iconName="truck"
}: ShippingOptionProps) => {
    return (
        <View style={[styles.addressContainer, styles.row, { paddingVertical: 18}]}>
            <View style={styles.row}>
                <View style={styles.innerIconBox}>
                    <FontAwesome6 name={option.iconName ? option.iconName : iconName} size={16} color="#fff" />
                </View>

                <View style={{ marginLeft: 8 }}>
                    <Text style={styles.title}>{option.type}</Text>
                    {option.date && <Text style={styles.subtitle}>{option.date}</Text>}
                </View>
            </View>

            { isEditable ? (
                <Pressable onPress={handleClick}>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </Pressable>
            ) : (
                <View style={[styles.row, { gap: 12 }]}>
                    <Text style={styles.title}>${option.fee}</Text>
                    <Pressable onPress={handleClick}>
                        <View style={[styles.outerCheckBox, styles.row]}>
                            {isSelected && <View style={styles.innerCheckBox} />}
                        </View>
                    </Pressable>
                </View>
            )}

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

export default ShippingOptions;