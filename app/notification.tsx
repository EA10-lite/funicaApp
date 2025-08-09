import { GoBack, NoResult } from "@/src/components/main";
import React from "react";
import { StyleSheet, View } from "react-native";

const Notifications = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <GoBack label={"Notifications"} />
            </View>

            <View style={styles.body}>
                <NoResult 
                    title="Notification"
                    subtitle="You don't have any notification"
                />
            </View>
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
    body: {
        flex: 1,
    }
});


export default Notifications;