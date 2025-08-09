import React from "react";
import { GoBack, Toggle } from "@/src/components/main";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Notification = ()=> {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <GoBack label={"Notification"} />
            </View>

            <ScrollView style={styles.view}>
                <View style={styles.body}>
                    <Field title="General Information" />
                    <Field title="Sound" />
                    <Field title="Special Offers" />
                    <Field title="Discount & Promo" />
                    <Field title="App Updates" />
                    <Field title="Cashbacks" />
                </View>
            </ScrollView>
        </View>
    )
}

type FieldProps = {
    title:  string;
}

const Field = ({ title } : FieldProps) => {
    return (
        <View style={styles.notification}>
            <Text style={styles.title}>{ title }</Text>
            <Toggle />
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
    notification: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 44,
    },
    title: {
        fontSize: 16,
        fontWeight: '400',
    },
});

export default Notification;