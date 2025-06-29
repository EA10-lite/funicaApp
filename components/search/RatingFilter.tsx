import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";


const filters = ["All","5", "4", "3", "2", "1"];

const RatingFilter = () => {
    const [currentFilter, setCurrentFilter] = useState<string>("All");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rating</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.filters}
            >
                {filters.map((filter, index) => (
                    <Pressable onPress={() => setCurrentFilter(filter)} key={index}>
                        <View
                            style={[
                                styles.filter,
                                styles.row,
                                filter === currentFilter && { backgroundColor: "#000" },
                            ]}
                        >
                            <FontAwesome name={"star"} size={14} color={filter === currentFilter ? "white": "black"} />
                            <Text
                                style={[
                                    styles.filterLabel,
                                    filter === currentFilter && { color: "#fff" },
                                ]}
                            >
                                {filter}
                            </Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    title: {
        fontSize: 16, 
        fontWeight: '600',
        marginBottom: 6,
    },
    filters: {
        paddingVertical: 8,
        gap: 12,
        flexDirection: "row",
    },
    filter: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#000",
    },
    row: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
    },
    filterLabel: {
        fontSize: 14,
        fontWeight: "500",
    },
});

export default RatingFilter;