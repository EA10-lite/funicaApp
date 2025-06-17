import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet} from "react-native";

type loginWithSocialsProps = {
    hasText?:    boolean;
}


const LoginWithSocials = ({ hasText = true } : loginWithSocialsProps) => {
    return (
        <View style={[styles.socialButtons, !hasText && styles.row]}>
            <View style={styles.button}>
                <FontAwesome5 name="facebook" size={24} color={"#1a92e9"} />
                { hasText && <Text style={styles.buttonLabel}>Continue with Facebook</Text>}
            </View>

            <View style={styles.button}>
                <AntDesign name="google" size={24} color={""} />
                { hasText && <Text style={styles.buttonLabel}>Continue with Google</Text>}
            </View>

            <View style={styles.button}>
                <AntDesign name="apple1" size={24} color={""} />
                { hasText && <Text style={styles.buttonLabel}>Continue with Apple</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    socialButtons: {
        display: "flex",
        gap: 24,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        borderWidth: 2,
        borderColor: "#efeeee",
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: '600',
    },
});


export default LoginWithSocials;