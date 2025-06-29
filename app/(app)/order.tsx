import { useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { NoResult, PageHeader } from "@/components/main";
import { OrderCard } from "@/components/cards";
import { PageTab } from "@/components/tabs";
import { OrderDTO } from "@/dto/product.dto";
import { Review, TrackOrder } from "@/components/modals";
import data from "@/data/orders";

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
    <View style={styles.container}>
      <PageHeader pageTitle="My Order" />
      <View style={styles.orderContainer}>
        <View style={styles.tab}>
          <PageTab 
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
            <View style={{ paddingBottom: 64 }}>
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
            </View>
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
    </View>
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
    marginTop: 24,
  },
  list: {},
  emptyorder: {
    flex: 1,
    width: '100%',
  },
  orderItems: {
    paddingVertical: 24,
  },
})


export default Order;