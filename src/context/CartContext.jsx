/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addToCart = (product) => {
    const productIndex = cart.findIndex((p) => p.id === product.idMembership);

    if (productIndex >= 0 && cart[productIndex].quantity < 1) {
      const newCart = structuredClone(cart);
      newCart[productIndex].quantity += 1;
      return setCart(newCart);
    }
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };
  saveCart(cart);

  const removeFromCart = (membership) => {
    setCart(
      cart.filter(
        (item) =>
          item.idMembership !== membership.idMembership ||
          item.idExtraAct !== membership.idExtraAct
      )
    );
  };

  const ClearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, ClearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
