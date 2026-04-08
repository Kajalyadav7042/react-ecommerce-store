import React, { createContext, useContext, useState, useEffect } from 'react'

// Create Context
export const CartContext = createContext()

// Custom Hook
export const useCart = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("product-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("product-cart", JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART
  const addToCart = (product) => {

    setCart((prevCart) => {

      const existing = prevCart.find(item => item.id === product.id);

      if (existing) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];

    });

  };

  // REMOVE ITEM
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // INCREASE QTY
  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // DECREASE QTY
  const decreaseQty = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // TOTAL PRICE
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // TOTAL ITEMS COUNT
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <CartContext.Provider value={{cart,
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  totalPrice,
  cartCount}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
