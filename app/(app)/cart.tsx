import { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Logo, NoResult } from "@/components/main";
import { CartCard } from "@/components/cards";
import { useCartContext } from "@/context/CartContext";

type ProductCardProps = {
    id:         string;
    price:      string;
    title:      string;
    rating:     number;
    imageUri:   string;
}

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContainer}>
        <View style={styles.header}>
          <Logo variant="dark" size='xs' />
          <Text style={styles.title}>My Cart</Text>
        </View>

        { cart.length <= 0 ? (
          <View style={styles.emptyCart}>
            <NoResult 
              title="No Item"
              subtitle="Your Cart is Empty, you have not added any item to your cart. Add items to your cart to see them here."
            />
          </View>
        ) : (
          <ScrollView style={styles.cartItems}>
            { cart.map((item) => (
              <CartCard 
                key={item.id}
                {...item}
              />
            ))}
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
    backgroundColor: '#fff',
  },
  cartContainer: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  list: {},
  emptyCart: {
    flex: 1,
    width: '100%',
  },
  cartItems: {},
  footer: {},
})


export default Cart;