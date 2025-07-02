import { imageMap } from "@/dto/images";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type TransactionCardProps = {
    Id:             string;
    type:           string;
    title:          string;
    date:           string;
    price:          number;
    imageUri:       string;
}

const TransactionCard = ({ Id, type, title, date, price, imageUri } : TransactionCardProps) => {
    return (
        <Pressable onPress={()=> router.push(`/wallet/${Id}`)}>
            <View style={styles.container}>
                <View style={styles.row}>
                    { type === "order" ? (
                        <View style={styles.imgContainer}>
                            <Image 
                                source={imageMap[imageUri]}
                                style={{ width: 48, height: 48, resizeMode: "contain" }}
                            />
                        </View>
                    ) : (
                        <View style={styles.outerIconBox}>
                            <View style={styles.innerIconBox}>
                                <AntDesign name="wallet" size={20} color={"white"} />
                            </View>
                        </View>
                    )} 


                    <View style={[styles.row, { flexGrow: 1 }]}>
                        <View style={{ width: "60%" }}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.type}>{date}</Text>
                        </View>

                        <View style={{ width: "20%", alignItems: "flex-end"}}>
                            <Text style={styles.title}>${price}</Text>
                            <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
                                <Text style={styles.type}>{type}</Text>
                                <View style={{ 
                                    backgroundColor: type === "order" ? "#f65656" : "#246dfd",
                                    borderRadius: 2,
                                    padding: 1,
                                    paddingHorizontal: 2,
                                }}>
                                    <AntDesign name={type !== "order" ? "arrowdown" : "arrowup"} size={12} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
    },

    imgContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#e3e3e3",
    },

    outerIconBox: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#e3e3e3",
        justifyContent: "center",
        alignItems: "center",
    },
    innerIconBox: {
        width: 36,
        height: 36,
        borderRadius: 20,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },

    date: {},
    type: {
        fontSize: 13,
        fontWeight: '400',
        color: "#898989",
        textTransform: "capitalize",
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
    },
});


export default TransactionCard;