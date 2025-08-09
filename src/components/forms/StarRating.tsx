import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { FormikValues, useFormikContext } from "formik";

type StarRatingProps = {
    name:   string;
}

const StarRating = ({ name } : StarRatingProps) => {
    const { setFieldValue, values } = useFormikContext<FormikValues>();

    const chooseRating = (rating: number) => {
        setFieldValue(name, rating);
    }


    return (
        <View style={styles.row}>
            {[1,2,3,4,5].map(rating => (
                <Pressable onPress={()=> chooseRating(rating)} key={rating}>
                    <FontAwesome name={values[name] >= rating ? "star" : "star-o"} size={24} color="black" />
                </Pressable>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 24,
        gap: 16,
    }
})

export default StarRating;