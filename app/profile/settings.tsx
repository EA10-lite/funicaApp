import React from "react";
import { GoBack } from "@/components/main";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Settings = ()=> {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <GoBack label={"Settings"} />
            </View>

            <ScrollView style={styles.view}>
                <View style={styles.body}>
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
});

export default Settings;