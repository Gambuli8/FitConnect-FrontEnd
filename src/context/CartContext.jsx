/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => { 
    
        const [cart, setCart] = useState([]);

            localStorage.setItem('cart', JSON.stringify(cart)); 

    const addToCart = product => {
        const productIndex = cart.findIndex(p => p.id === product.id);

        if (productIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productIndex].quantity += 1
            return setCart(newCart);
        }
        setCart(prevState => [
            ...prevState,
            {
                ...product,
                quantity: 1
            },
        ])
    }

    const removeFromCart = membership => {
        return setCart(prevState => prevState.filter(p => p.id !== membership.id));
    }

    const ClearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, ClearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

