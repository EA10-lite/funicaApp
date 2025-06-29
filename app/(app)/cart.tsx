import { Text, View, StyleSheet } from "react-native";
import { Button, NoResult, PageHeader } from "@/components/main";
import { CartCard } from "@/components/cards";
import { useCartContext } from "@/context/CartContext";
import { CustomScrollView } from "@/layout";

const Cart = () => {
  const { cart } = useCartContext();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = item.price * item.quantity;
      return total + price;
    }, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <PageHeader pageTitle="My Cart" />
      <View style={styles.cartContainer}>
        <View style={styles.body}>
          { cart.length <= 0 ? (
            <View style={styles.emptyCart}>
              <NoResult 
                title="No Item"
                subtitle="Your Cart is Empty, you have not added any item to your cart. Add items to your cart to see them here."
              />
            </View>
          ) : (
            <CustomScrollView>
              <View style={styles.cartItems}>
                { cart.map((item) => (
                  <CartCard 
                    key={item.id}
                    {...item}
                  />
                ))}
              </View>
            </CustomScrollView>
          )}
        </View>

        { cart.length > 0 && (
          <View style={styles.footer}>
            <View>
              <Text style={styles.paragraph}>Total Price</Text>
              <Text style={styles.price}>${getTotalPrice()}</Text>
            </View>

            <View style={{ flexGrow: 1,}}>
              <Button 
                label="Checkout"
                href="/checkout"
                variant="dark"
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },
  cartContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  body: {
    flexGrow: 1,
  },
  list: {},
  emptyCart: {
    flex: 1,
    width: '100%',
  },
  cartItems: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 64,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    position: 'absolute',
    bottom: 82,
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