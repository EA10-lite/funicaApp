import React, { PropsWithChildren } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { GoBack } from "@/src/components/main";
import { OrderCard } from "../cards";
import { OrderDTO } from "@/dto/product.dto";
import Modal from "react-native-modal";
import { AntDesign, Feather, FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import OrderTrackerStep from "../steps/OrderTrackerStep";

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

                        <View style={styles.tracking}>
                            <OrderTrackerStep />
                        </View>

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
            <View style={styles.outerBox}>
                <View style={styles.innerBox} />
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
    tracking: {
        marginBottom: 32,
        paddingHorizontal: 12,
        paddingBottom: 32,
        borderBottomColor: "#e2e2e2",
        borderBottomWidth: 1,
    },
    tracker: {
        borderBottomWidth: 2,
        borderColor: "#000",
        borderStyle: "dashed",
    },
    verticalLine: {
        borderLeftWidth: 2,
        borderLeftColor: '#ccc',
        borderStyle: 'dashed',
        flex: 1,
        marginTop: 2,
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
    outerBox: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderBlockColor: "#000",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    innerBox: {
        backgroundColor: "#000",
        width: 16,
        height: 16,
        borderRadius: 8,
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