import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, GoBack } from "@/components/main";
import { ShippingOption } from "@/components/checkout";

const shippingOptions = [
    {
        type: "Economy",
        fee: 10,
        date: "Estimated Arival Dec 20 - 23",
        iconName: "truck-ramp-box"
    },
    {
        type: "Regular",
        fee: 15,
        date: "Estimated Arival Dec 15 - 18",
        iconName: "box"
    },
    {
        type: "Cargo",
        fee: 20,
        date: "Estimated Arival Dec 10 - 13",
        iconName: "truck"
    },
    {
        type: "Express",
        fee: 25,
        date: "Estimated Arival Dec 5 - 8",
        iconName: "truck-fast"
    },
]

type ShippingOptionProps = {
    type:       string;
    date:       string;
    fee:        number;
    iconName:   string;
}

const EditShippingOptions = () => {
    const [selectedOption, setSelectedOption] = useState<ShippingOptionProps | null>(null);

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <GoBack label="Choose Shipping Type" />
            </View>
            <ScrollView style={styles.view}>
                <View style={styles.body}>
                    { shippingOptions.map((option, index)=> (
                        <View style={styles.field} key={index}>
                            <ShippingOption 
                                title={option.type}
                                isEditable={false}
                                subtitle={option.date}
                                price={option.fee}
                                iconName={option.iconName}
                                handleClick={()=> setSelectedOption(option)}
                                isSelected={selectedOption?.type === option.type}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Button 
                    label="Apply"
                    variant="dark"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        flex: 1,
        paddingVertical: 20,
    },
    head: {
        height: 80,
        marginBottom: 24,
    },
    body: {
        paddingHorizontal: 24,
    },
    field: {
        marginBottom: 16,
    },
    footer: {
        position: 'absolute',
        bottom: 44,
        width: '100%',
        paddingHorizontal: 24,
    },
});

export default EditShippingOptions;