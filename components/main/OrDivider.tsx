import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrDivider = () => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.text}>OR</Text>
            <View style={styles.line} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 44,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#efeeee',
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginHorizontal: 10,
    },
});

export default OrDivider;