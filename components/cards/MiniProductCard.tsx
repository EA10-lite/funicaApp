import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { CartItem } from "@/context/CartContext";

const MiniProductCart = ({
  id,
  title,
  price,
  imageUri,
  quantity,
} : CartItem) => {
  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: imageUri }} style={styles.image} />
      </View>
      <View style={styles.details}>
        <View style={[styles.row, { marginBottom: 6, gap: 16 }]}>
          <View style={{ maxWidth: '80%' }}>
            <Text style={[styles.title]}>{title}</Text>
          </View>
        </View>
        <View style={styles.quantityBox}>
          <Text>{quantity} item{quantity > 1 ? "s" : ""}</Text>
        </View>
        <Text style={styles.price}>${price}</Text>
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
    resizeMode: "contain",
  },
  details: {
    flex: 1,
    overflow: 'hidden',
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
  quantityBox: {
    marginBottom: 6,
  },
});

export default MiniProductCart;
