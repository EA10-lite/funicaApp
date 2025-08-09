import React from "react";
import { StyleSheet, View, Text } from "react-native";

type PageHeaderProps = {
    pageTitle:  string;
}

const PageHeader = ({ pageTitle } : PageHeaderProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{ pageTitle }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: "flex-end",
        gap: 20,
        borderBottomColor: "#e2e2e2",
        borderBottomWidth: 1,
        paddingBottom: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    },
})

export default PageHeader;