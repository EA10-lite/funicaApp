import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GoBack } from "@/components/main";
import { PageTab } from "@/components/tabs";
import { Contact, FAQ } from "@/components/about";

const HelpCenter = () => {
    const [activeTab, setActiveTab] = useState<string>("faq");
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <GoBack label={"Help Center"} />
            </View>

            <View style={styles.tab}>
                <PageTab
                    tabs={["faq", "contact us"]}
                    activeTab={activeTab}
                    setActiveTab={(tab)=> setActiveTab(tab)}
                />
            </View>
            <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    { activeTab === "faq" ? (
                        <FAQ />
                    ) : (
                        <Contact />
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3f3",
    },
    head: {
        marginBottom: 24,
        height: 80,
    },
    tab: {
        padding: 24,
    },
    view: {
        flex: 1,
    },
    body: {
        paddingHorizontal: 24,
        flexGrow: 1,
    },
});

export default HelpCenter;