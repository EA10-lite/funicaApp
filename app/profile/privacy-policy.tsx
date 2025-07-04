import React from "react";
import { GoBack } from "@/components/main";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const PrivacyPolicy = ()=> {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <GoBack label={"Privacy Policy"} />
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
        <View>
            <Text>{title}</Text>
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
    title: {
        fontSize: 16,
        fontWeight: '400',
    },
});

export default PrivacyPolicy;