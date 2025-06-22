import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Logo from "./Logo";

type PageHeaderProps = {
    pageTitle:  string;
}

const PageHeader = ({ pageTitle } : PageHeaderProps) => {
    return (
        <View style={styles.header}>
            <Logo variant="dark" size='xs' />
            <Text style={styles.title}>{ pageTitle }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
        paddingVertical: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
    },
})

export default PageHeader;