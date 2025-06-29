import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";


const filters = ["All", "Sofa", "Chair", "Table", "Bed", "Lamp", "Kitchen"];

const CategoryFilter = () => {
    const [currentFilter, setCurrentFilter] = useState<string>("All");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Category</Text>

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
                                filter === currentFilter && { backgroundColor: "#000" },
                            ]}
                        >
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
    filterLabel: {
        fontSize: 14,
        fontWeight: "500",
    },
});

export default CategoryFilter;