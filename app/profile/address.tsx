import React from "react";
import { ShippingAddress } from "@/components/checkout";
import { Button, GoBack } from "@/components/main";
import { useSession } from "@/context/AuthContext";
import { ScrollView, StyleSheet, View } from "react-native";

const EditAddress = () => {
    const { user } = useSession();
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <GoBack label="Edit Address" />
            </View>

            <ScrollView style={styles.view}>
                <View style={styles.body}>
                    { user?.address.map((address, index)=> (
                        <View style={styles.field} key={index}>
                            <ShippingAddress 
                                address={address}
                                key={index}
                                isEditable={true}
                                handleClick={()=> null} 
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Button 
                    label="Add New Address"
                    variant="dark"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3f3",
    },
    view: {
        flex: 1,
        paddingVertical: 24,
    },
    head: {
        height: 80,
        marginBottom: 24,
    },
    body: {
        paddingHorizontal: 24,
        paddingBottom: 120,
    },
    
    field: {
        marginBottom: 24,
    },
    footer: {
        position: 'absolute',
        bottom: 44,
        width: '100%',
        paddingHorizontal: 24,
    },
});

export default EditAddress;