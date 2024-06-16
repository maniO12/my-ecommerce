import React,{ createContext } from "react";
import all_product from '../components/Assets/all_product';
import { useState } from "react";
export const ShopContext = createContext(null);

 const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < all_product.length;index++){
        cart[index] = 0;
    }
    return cart;
 }

const ShopContextProvider = (props) => {
    const[cartItems,setCartItems] = useState(getDefaultCart());
   
    const addToCart = (itemId) => {
          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems)
    }
 

    const GetAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        console.log(totalAmount);
        return totalAmount;
    }

  const getTotalItems = () => {
    let totalItems = 0;
    for(const item in cartItems){
       if(cartItems[item]>0){
          totalItems += cartItems[item];
       }
    }
    return totalItems;
  }  

    const removeToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
  }

  const contextvalue = {all_product,cartItems,addToCart,removeToCart,GetAmount,getTotalItems};
    return(
        <ShopContext.Provider  value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
