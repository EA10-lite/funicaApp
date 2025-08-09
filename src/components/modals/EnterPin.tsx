import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Modal from "react-native-modal";
import { Button, GoBack } from "../main";

type EnterPinProps = {
    isOpen:     boolean;
    closeModal: () => void;
}

const EnterPin = ({ isOpen, closeModal } : EnterPinProps) => {
    const [pin, setPin] = useState("");

    const handlePress = (value: string) => {
        if (value === "back") {
            setPin((prev) => prev.slice(0, -1));
        } else if (pin.length < 4) {
            setPin((prev) => prev + value);
        }
    };

    const renderPinBoxes = () => {
        return Array.from({ length: 4 }).map((_, index) => {
            const filled = index < pin.length;
            const isLastTyped = index === pin.length - 1;
            return (
                <View key={index} style={[styles.pinBox, isLastTyped && styles.activePinBox]}>
                    <Text style={styles.pinText}>
                        {filled ? (isLastTyped ? pin[index] : "•") : ""}
                    </Text>
                </View>
            );
        });
    };

    const keypad = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["*", "0", "back"],
    ];

    return (
        <Modal
            isVisible={isOpen}
            animationIn="slideInRight"
            animationOut="slideOutRight"
            onBackdropPress={closeModal}
            backdropOpacity={0}
            style={{ margin: 0 }}
        >
           <View style={styles.container}>
                <View style={styles.head}>
                    <GoBack 
                        label="Enter your pin"
                        handlePress={closeModal}
                    />
                </View>

                <View style={styles.body}>
                    <Text style={styles.subText}>Enter your PIN to confirm payment</Text>

                    <View style={styles.pinRow}>{renderPinBoxes()}</View>



                </View>

                <View style={styles.btnContainer}>
                    <Button 
                        label="Continue"
                        variant="dark"
                    />
                </View>

                <View style={styles.keypad}>
                    {keypad.map((row, rowIndex) => (
                    <View style={styles.keyRow} key={rowIndex}>
                        {row.map((item) => (
                        <TouchableOpacity
                            key={item}
                            onPress={() => handlePress(item)}
                            style={styles.key}
                        >
                            {item === "back" ? (
                            <Ionicons name="backspace-outline" size={24} color="black" />
                            ) : (
                            <Text style={styles.keyText}>{item}</Text>
                            )}
                        </TouchableOpacity>
                        ))}
                    </View>
                    ))}
                </View>
           </View>

        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    head: {
        height: 80,
        marginBottom: 24,
    },
    body: {
        paddingHorizontal: 24,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    subText: {
        fontSize: 16,
        color: "#555",
        marginBottom: 64,
    },
    pinRow: {
        flexDirection: "row",
        gap: 16,
        justifyContent: "center",
        marginBottom: 32,
        width: '100%',
    },
    btnContainer: {
        paddingHorizontal: 24,
        marginBottom: 32,
    },
    pinBox: {
        width: 72,
        height: 60,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f8f8",
    },
    activePinBox: {
        borderColor: "#000",
    },
    pinText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    continueBtn: {
        backgroundColor: "#000",
        paddingVertical: 16,
        borderRadius: 32,
        alignItems: "center",
        marginBottom: 32,
    },
    continueText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    keypad: {
        marginTop: "auto",
        // paddingBottom: 32,
        backgroundColor: "#f3f3f3",
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    keyRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    key: {
        width: "30%",
        // backgroundColor: "#f1f1f1",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 24,
    },
    keyText: {
        fontSize: 20,
        fontWeight: "600",
    },
});

export default EnterPin;
