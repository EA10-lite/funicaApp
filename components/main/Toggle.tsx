import React, { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Animated } from "react-native";

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);
    const [translateX] = useState(new Animated.Value(0));

    const toggleSwitch = () => {
        Animated.timing(translateX, {
            toValue: isOn ? 0 : 30,
            duration: 200,
            useNativeDriver: true,
        }).start();
        setIsOn(!isOn);
    };

    return (
        <TouchableWithoutFeedback onPress={toggleSwitch}>
            <View style={[styles.toggleContainer, isOn ? styles.onBackground : styles.offBackground]}>
                <Animated.View style={[styles.knob, {transform: [{ translateX }]}]} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    toggleContainer: {
        width: 56,
        height: 28,
        borderRadius: 15,
        padding: 3,
        justifyContent: "center",
    },
    onBackground: {
        backgroundColor: "#000",
    },
    offBackground: {
        backgroundColor: "#ccc",
    },
    knob: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "white",
    },
});

export default Toggle;
