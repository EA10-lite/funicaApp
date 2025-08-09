import React from "react";
import { StyleSheet, View } from "react-native";
import { Category } from "@/src/components/cards";
import categories from "@/src/data/categories";


const Categories = () => {
    return (
        <View style={styles.categories}>
            { categories.map((category)=> (
                <Category 
                    {...category}
                    key={category.name}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 24,
        columnGap: 32,
        justifyContent: 'space-between',
        marginBottom: 24,
    },
});

export default Categories;