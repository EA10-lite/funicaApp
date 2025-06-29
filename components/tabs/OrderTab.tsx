import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

type OrderTabProps = {
    tabs:           string[];
    activeTab:      string;
    setActiveTab:   (tab: string) => void;
}

const OrderTab = ({ activeTab, setActiveTab, tabs} : OrderTabProps) => {
    return (
        <View style={styles.tabContainer}>
            {tabs.map((tab, index)=> (    
                <View style={[styles.tab, activeTab === tab && styles.activeTab]} key={index}>
                    <Pressable onPress={()=> setActiveTab(tab)}>
                        <Text style={[styles.title, activeTab === tab && styles.activeTabColor]}>{tab}</Text>
                    </Pressable>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
    },
    activeTab: {
        borderColor: '#000',
        borderBottomWidth: 2,
    },
    activeTabColor: {
        color: '#000',
    },
    tab: {
        flex: 0.5,
        borderBottomWidth: 1,
        borderColor: "#9e9e9e",
        paddingBottom: 12,
    },
    title: {
        textAlign:'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#9e9e9e',
        textTransform: "capitalize",
    },
});

export default OrderTab;