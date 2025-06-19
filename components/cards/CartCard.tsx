import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { CartItem, useCartContext } from "@/context/CartContext";

const CartCard = ({
  id,
  title,
  quantity, 
  price,
  imageUri,
} : CartItem) => {
  const { addToCart, removeFromCart } = useCartContext();

  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        {/* <Image source={{ uri: imageUri }} style={styles.image} /> */}
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <Text style={styles.price}>{price}</Text>
          <QuantityBox 
            quantity={quantity} 
            addToCart={()=> addToCart({ 
              id, 
              title, 
              price,
              imageUri,
            })}
            removeFromCart={()=> removeFromCart(id)}
          />
        </View>
      </View>
    </View>
  );
};

type QuantityBoxProps = {
  quantity:   number;
  addToCart:  ()=> void;
  removeFromCart: ()=> void;
}

const QuantityBox = ({ quantity, addToCart, removeFromCart } : QuantityBoxProps) => {
  return (
    <View style={styles.qtyBox}>
      <Pressable style={styles.minus} onPress={removeFromCart}>
        <AntDesign name="minus" size={16} color="black" />
      </Pressable>

      <Text>{ quantity }</Text>

      <Pressable style={styles.add} onPress={addToCart}>
        <AntDesign name="plus" size={16} color="black" />
      </Pressable>
    </View>
  )
}

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
  qtyBox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 2,
    backgroundColor: '#f3f3f3',
    width: 100,
    borderRadius: 133,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  minus: {},
  add: {},
});

export default CartCard;
