import { CreditCard, TransactionCard } from "@/components/cards";
import { PageHeader } from "@/components/main";
import transactions from "@/data/transactions";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Wallet = () => {
    return (
        <View style={styles.container}>
            <PageHeader pageTitle="My Wallet" />

            <View style={styles.body}>
                <View style={styles.card}>
                    <CreditCard />
                </View>
                <View style={[styles.row, { marginBottom: 24 }]}>
                    <Text style={styles.title}>Transactions</Text>
                    <Link href="/wallet/transactions" style={styles.link}>See all</Link>
                </View>

                {transactions.slice(0, 5).map(transaction => (
                    <TransactionCard 
                        key={transaction.id}
                        Id={transaction.id}
                        type={transaction.type}
                        title={transaction.title}
                        price={transaction.price}
                        date="Dec 14, 2024"
                        imageUri={transaction.imageUri}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    body: {
        paddingVertical: 24,
        paddingHorizontal: 24,
    },

    card: {
        marginBottom: 32,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        fontSize: 18,
        fontWeight: '600'
    },

    link: {
        fontSize: 14,
        fontWeight: '600',
    },
})

export default Wallet;