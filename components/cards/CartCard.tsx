import React, { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { CartItem, useCartContext } from "@/context/CartContext";
import { RemoveFromCart } from "../modals";

const CartCard = ({
  id,
  title,
  quantity, 
  price,
  imageUri,
} : CartItem) => {
  const { addToCart, removeFromCart } = useCartContext();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: imageUri }} style={styles.image} />
      </View>
      <View style={styles.details}>
        <View style={[styles.row, { marginBottom: 10, gap: 16 }]}>
          <View style={{ maxWidth: '80%' }}>
            <Text style={[styles.title]}>{title}</Text>
          </View>
          <Feather 
            name="trash" 
            size={20} 
            color="black" 
            onPress={()=> setOpen(true)}
          />
        </View>

        <View style={[styles.row, { alignItems: "center"}]}>
          <Text style={styles.price}>${price}</Text>
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

      
        <RemoveFromCart 
          closeModal={()=> setOpen(false)}
          isOpen={open}
          item={{
            id,
            title,
            imageUri,
            price,
            quantity
          }}
        />
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
    marginTop: 10,
  },
  minus: {},
  add: {},
});

export default CartCard;
