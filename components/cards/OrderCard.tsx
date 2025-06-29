import React from "react";
import { OrderDTO } from "@/dto/product.dto";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";

interface OrderCardProps extends OrderDTO {
  handleClick?:   ()=> void;
  btnType?:       string;
}

const OrderCard = ({
  id,
  title,
  quantity, 
  price,
  imageUri,
  status,
  rating,
  handleClick,
  btnType,
} : OrderCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <Image source={imageUri} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Qty {quantity}   |   rating {rating}</Text>
        <View style={styles.status}>
          <Text style={styles.subtitle}>{status}</Text>
        </View>
        <View style={[styles.row, { alignItems: "center"}]}>
          <Text style={styles.price}>${price}</Text>
          { btnType && <Pressable style={styles.btn} onPress={handleClick}>
            <Text style={styles.btnText}>{ btnType}</Text>
          </Pressable>}
        </View>
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
    padding: 16,
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
    width: 100,
    height: 100,
    borderRadius: 8,
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
  status: {
    backgroundColor: "#ececec",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginVertical: 8,
    width: 80,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
  },
  btn: {
    backgroundColor: "#000",
    borderRadius: 35,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  btnText: {
    color: "#fff"
  },
});

export default OrderCard;
