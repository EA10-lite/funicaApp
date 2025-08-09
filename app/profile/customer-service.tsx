import React from "react";
import { GoBack } from "@/src/components/main";
import { ScrollView, StyleSheet, View } from "react-native";

const CustomerService = ()=> {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <GoBack label={"Customer Service"} />
            </View>

            <ScrollView style={styles.view}>
                <View style={styles.body}>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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
        paddingVertical: 24,
        flexGrow: 1,
    },
});

export default CustomerService;