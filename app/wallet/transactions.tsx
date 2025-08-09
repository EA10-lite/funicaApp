import { TransactionCard } from "@/src/components/cards";
import { GoBack } from "@/src/components/main";
import transactions from "@/src/data/transactions";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const Transactions = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <GoBack label={"Transactions"} />
            </View>
            <ScrollView 
                style={styles.view} 
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.body}>
                    {transactions.map(transaction => (
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
        paddingTop: 24,
    }
});


export default Transactions;