import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';

// Create a context
const GlobalContext = createContext();

// Create a provider component
const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        // save data to  local storage
        localStorage.setItem('cart', JSON.stringify([...cart, product]));
        // toast.success('Added to cart');

    };
    const removeToCart = (product)=>{
        const newCart = cart.filter((item)=>item.id !== product.id);
        setCart(newCart);
        localStorage.setItem("cart" , JSON.stringify(newCart));
    
    }

    return (
        <GlobalContext.Provider value={{
            cart,
            addToCart,
            removeToCart
         }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, ContextProvider};

