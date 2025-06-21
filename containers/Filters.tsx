import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";

const filters = ["All", "Sofa", "Chair", "Table", "Bed", "Lamp", "Kitchen"];

const Filters = () => {
    const [currentFilter, setCurrentFilter] = useState("All");

    return (
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
    );
};

const styles = StyleSheet.create({
    filters: {
        paddingHorizontal: 24,
        paddingVertical: 8,
        gap: 12,
        flexDirection: "row",
        marginBottom: 24,
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

export default Filters;
