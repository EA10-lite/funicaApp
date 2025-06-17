import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { Logo } from "@/components/main";

const Signin = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo size="lg" variant="dark" />
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.title}>Create Account</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {},
    formContainer: {},
    title: {},
});


export default Signin;