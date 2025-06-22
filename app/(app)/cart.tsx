import { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Button, Logo, NoResult, PageHeader } from "@/components/main";
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

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = item.price * item.quantity;
      return total + price;
    }, 0).toFixed(2);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContainer}>
        <View style={styles.header}>
          <PageHeader pageTitle="My Cart" />
        </View>

        <View style={styles.body}>
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
        </View>

        { cart.length > 0 && (
          <View style={styles.footer}>
            <View>
              <Text style={styles.paragraph}>Total Price</Text>
              <Text style={styles.price}>${getTotalPrice()}</Text>
            </View>

            <Button 
              label="Checkout"
              href="/checkout/checkout"
              variant="dark"
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartContainer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  body: {
    flexGrow: 1,
    paddingBottom: 200,
  },
  list: {},
  emptyCart: {
    flex: 1,
    width: '100%',
  },
  cartItems: {
    paddingHorizontal: 24,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    position: 'absolute',
    bottom: 48,
    zIndex: 60,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  price: {
    fontSize: 22,
    fontWeight: '600',
  },
  paragraph: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: '400',
  },
})


export default Cart;