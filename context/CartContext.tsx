import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Type definitions
export interface CartItem {
  id: string;
  title: string;
  quantity: number;
  imageUri: string;
  price: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  isInCart: (id: string) => CartItem | undefined;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (data: Omit<CartItem, "quantity">) => {
    console.log("Adding to cart:", data);
    
    let temp_cart = [...cart];
    const existingItem = temp_cart.find((item) => item.id === data.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      temp_cart.push({ ...data, quantity: 1 });
    }

    setCart(temp_cart);
    AsyncStorage.setItem("cart", JSON.stringify(temp_cart));
  };

  const removeFromCart = (id: string) => {
    let temp_cart = [...cart];
    const cartItem = temp_cart.find((item) => item.id === id);

    if (cartItem) {
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        temp_cart = temp_cart.filter((item) => item.id !== id);
      }
      setCart(temp_cart);
      AsyncStorage.setItem("cart", JSON.stringify(temp_cart));
    }
  };

  const getCartItem = async () => {
    const storedCart = await AsyncStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
      setCart([]);
    }
  };

  const isInCart = (id: string) => {
    return cart.find((item) => item.id === id);
  };

  useEffect(() => {
    getCartItem();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
