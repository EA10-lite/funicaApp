import { useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { NoResult, PageHeader } from "@/components/main";
import { OrderCard } from "@/components/cards";
import { OrderTab } from "@/components/tabs";
import { OrderDTO } from "@/dto/product.dto";
import data from "@/data/orders";
import { Review, TrackOrder } from "@/components/modals";

const Order = () => {
  const [activeTab, setActiveTab] = useState<string>("active");
  const [openReviewModal, setOpenReviewModal] = useState<boolean>(false);
  const [openTrackOrderModal, setOpenTrackOrderModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<OrderDTO | null>(null);

  const handleClick = (item: OrderDTO, type?: string) => {
    setSelectedItem(item);
    if(type === "active") {
      setOpenTrackOrderModal(true);
    }
    else {
      setOpenReviewModal(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.orderContainer}>
        <PageHeader pageTitle="My Order" />
        <View style={styles.tab}>
          <OrderTab 
            tabs={["active", "completed"]}
            activeTab={activeTab}
            setActiveTab={(tab)=> setActiveTab(tab)}
          />
        </View>

        { data.length <= 0 ? (
          <View style={styles.emptyorder}>
            <NoResult 
              title="You don't have an order yet."
              subtitle="You don't have any active orders at this time."
            />
          </View>
        ) : (
          <ScrollView style={styles.orderItems} showsVerticalScrollIndicator={false}>
            { activeTab === "completed" ? 
              data.filter(order => order.status === "completed").map(item => (
                <OrderCard 
                  key={item.id}
                  handleClick={()=> handleClick(item, "completed")}
                  btnType="Leave Review"
                  {...item}
                />
              )) : data.filter(order => order.status !== "completed" ).map((item) => (
              <OrderCard 
                key={item.id}
                {...item}
                handleClick={()=> handleClick(item, "active")}
                btnType="Track order"
              />
            ))}
          </ScrollView>
        )}

        <Review 
          isOpen={openReviewModal}
          item={selectedItem}
          closeModal={()=> {
            setSelectedItem(null);
            setOpenReviewModal(false)
          }}
        />


        <TrackOrder 
          isOpen={openTrackOrderModal}
          closeModal={()=> {
            setSelectedItem(null);
            setOpenTrackOrderModal(false);
          }}
          item={selectedItem}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },
  orderContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  tab: {
    marginBottom: 24,
  },
  list: {},
  emptyorder: {
    flex: 1,
    width: '100%',
  },
  orderItems: {},
})


export default Order;