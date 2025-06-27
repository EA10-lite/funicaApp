import { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Logo, NoResult, PageHeader } from "@/components/main";
import { OrderCard } from "@/components/cards";
import { OrderTab } from "@/components/tabs";

type ProductCardProps = {
  id:         string;
  price:      string;
  title:      string;
  rating:     number;
  imageUri:   string;
  quantity:   number;
}

const Order = () => {
  const [activeTab, setActiveTab] = useState<string>("Active");
  const [orders, setOrders] = useState<ProductCardProps[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.orderContainer}>
        <PageHeader pageTitle="My Order" />
        <OrderTab 
          tabs={["Active", "Completed"]}
          activeTab={activeTab}
          setActiveTab={(tab)=> setActiveTab(tab)}
        />

        { orders.length <= 0 ? (
          <View style={styles.emptyorder}>
            <NoResult 
              title="You don't have an order yet."
              subtitle="You don't have any active orders at this time."
            />
          </View>
        ) : (
          <ScrollView style={styles.orderItems}>
            { orders.map((item) => (
              <OrderCard 
                key={item.id}
                {...item}
              />
            ))}x
          </ScrollView>
        )}


        <View style={styles.footer}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  orderContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  list: {},
  emptyorder: {
    flex: 1,
    width: '100%',
  },
  orderItems: {},
  footer: {},
})


export default Order;