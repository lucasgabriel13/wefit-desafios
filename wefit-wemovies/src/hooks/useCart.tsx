import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../lib/axios";

type CartProviderProps = {
  children: ReactNode;
}

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

type CartContextData = {
  cart: Product[];
  addProduct: (productId: number) => void;
  removeProduct: (productId: number) => void;
  updateProductAmount: (productId: number, amount: number) => void;
  finalizeOrder: () => void;
}


const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  async function addProduct(productId: number) {

    const cartStorage = [...cart];
    const existingProduct = cartStorage.find(product => product.id === productId);

    if (existingProduct) {
      existingProduct.amount++;
    } else {
      const product = await api.get(`/products/${productId}`);
      const newProduct = {
        ...product.data,
        amount: 1,
      }

      cartStorage.push(newProduct);
    }
    setCart(cartStorage);
  }

  function removeProduct(productId: number) {
    const cartStorage = cart.filter(product => product.id !== productId);
    setCart(cartStorage);
  }

  function updateProductAmount(productId: number, amount: number) {
    const cartStorage = [...cart];

    const existingProduct = cart.find(product => product.id === productId);

    if (amount < 1) return;

    if (existingProduct) {
      const updateProductCart = cartStorage.map(product => (
        product.id === productId ?
          {
            ...product,
            amount: amount
          }
          : product
      ));

      setCart(updateProductCart);
    }
  }

  function finalizeOrder() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{
      cart,
      addProduct,
      removeProduct,
      updateProductAmount,
      finalizeOrder
    }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}


export { CartProvider, useCart }
