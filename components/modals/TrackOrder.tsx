import React, { PropsWithChildren } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { GoBack } from "@/components/main";
import { OrderCard } from "../cards";
import { OrderDTO } from "@/dto/product.dto";
import Modal from "react-native-modal";
import { FontAwesome6 } from "@expo/vector-icons";

type TrackOrderProps = PropsWithChildren<{
    isOpen:        boolean;
    closeModal:    ()=> void;
    item:           OrderDTO | null;
}>;

const TrackOrder = ({ isOpen, closeModal, item }: TrackOrderProps) => {
    return (
        <Modal
            isVisible={isOpen}
            animationIn="slideInRight"
            animationOut="slideOutRight"
            onBackdropPress={closeModal}
            backdropOpacity={0}
            style={{ margin: 0 }}
        >
            <View style={styles.container}>
                <View style={styles.head}>
                    <GoBack 
                        label="Track Order" 
                        handlePress={closeModal}
                    />
                </View>
                <ScrollView style={styles.view}>
                    <View style={styles.body}>
                        { item && (
                            <OrderCard 
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                imageUri={item.imageUri}
                                quantity={item.quantity}
                                rating={item.rating}
                                status="Ongoing"
                            />
                        )}

                        <View style={styles.orderStatus}>
                            <View style={{ marginBottom: 24, }}>
                                <Text style={styles.title}> Order Details Summary </Text>
                            </View>


                            <OrderStatus 
                                iconName="box-open"
                                status="Order Received"
                                date="22nd December 2024"
                                time="15:00"
                                active={false}
                            />

                            <OrderStatus 
                                iconName="truck"
                                status="Order Shipped"
                                date="28th December 2024"
                                time="10:00"
                                active={false}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}


type OrderStatusProps = {
    iconName:   string;
    status:     string;
    active:     boolean;
    date:       string;
    time:       string
}

const OrderStatus = ({ iconName, status, active, date, time }: OrderStatusProps) => {
    return (
        <View style={styles.status}>
            <View style={styles.innerIconBox}>
                <FontAwesome6 name={iconName} size={16} color="#fff" />
            </View>

            <View style={styles.row}>
                <View>
                    <Text style={styles.statusTitle}>{status}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>

                <Text style={styles.date}>{time}</Text>
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
        paddingVertical: 20,
    },
    head: {
        height: 80,
        marginBottom: 24,
    },
    body: {
        paddingHorizontal: 24,
    },
    orderStatus: {},
    status: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        marginBottom: 24,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexGrow: 1,
        alignItems: "center",
    },
    innerIconBox: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: '600', 
    },
    statusTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    date: {
        fontSize: 13,
        fontWeight: '400',
    },
});

export default TrackOrder;