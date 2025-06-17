import React from "react";
import { Button, OrDivider } from "@/components/main";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";

const Auth = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imgbackground}>
                <Image 
                    source={require("@/assets/images/undraw_welcome.png")}  
                    style={styles.img}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.title}>Let's get started</Text>


                <View style={styles.socialButtons}>
                    <View style={styles.button}>
                        <FontAwesome5 name="facebook" size={24} color={"#1a92e9"} />
                        <Text style={styles.buttonLabel}>Continue with Facebook</Text>
                    </View>

                    <View style={styles.button}>
                        <AntDesign name="google" size={24} color={""} />
                        <Text style={styles.buttonLabel}>Continue with Google</Text>
                    </View>

                    <View style={styles.button}>
                        <AntDesign name="apple1" size={24} color={""} />
                        <Text style={styles.buttonLabel}>Continue with Apple</Text>
                    </View>
                </View>

                <OrDivider />

                <Button 
                    label="Sign in with password" 
                    variant="dark" 
                />

                <Text style={styles.link}> Don't have an account ? <Link href={"/signup"} style={styles.boldLink}>Signup</Link></Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    imgbackground: {
        marginBottom: 24,
    },
    img: {
        width: 200,
        height: 200,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 24,
    },
    details: {
        width: '100%',
        paddingHorizontal: 24,
    },
    socialButtons: {
        display: "flex",
        gap: 24,
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
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: '600',
    },
    link: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 400,
        marginTop: 24,
        color: '#9e9c9d',
    },
    boldLink: {
        fontWeight: '600',
        color: '#000',
    }
})


export default Auth;