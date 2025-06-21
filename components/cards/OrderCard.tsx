import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";


type OrderItemProps = {
  id:         string;
  title:      string;
  quantity:   number;
  price:      string;
  imageUri:   string;
}

const OrderCard = ({
  id,
  title,
  quantity, 
  price,
  imageUri,
} : OrderItemProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: imageUri }} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: 'flex-start',
    gap: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  imgContainer: {
    backgroundColor: "#f3f3f3",
    borderRadius: 16,
    width: 100,
    margin: 'auto',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
    resizeMode: "contain"
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 16,
    color: "#333",
    fontWeight: '600',
    marginBottom: 2,
  },
});

export default OrderCard;
