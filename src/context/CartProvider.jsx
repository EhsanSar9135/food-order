import React, { useReducer } from "react";
import CartContext from "./cartContext";

const initialState = {
   items: [],
   totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
   const { type, item } = action;
   const { items, totalAmount } = state;
   const { price, amount } = item;
   switch (type) {
      case "ADD":
         const updatedTotalAmount = totalAmount + price * amount;
         const existingCartItemIndex = items.findIndex(
            ({ id }) => id === item.id
         );
         const existingCartItem = items[existingCartItemIndex];
         let updatedItems;
         if (existingCartItem) {
            const updatedItem = {
               ...existingCartItem,
               amount: existingCartItem.amount + item.amount,
            };
            updatedItems = [...items];
            updatedItems[existingCartItemIndex] = updatedItem;
         } else {
            updatedItems = items.concat(item);
         }
         return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
         };
      default:
         return state;
   }
};

const CartProvider = ({ children }) => {
   const [cartState, dispatchCart] = useReducer(cartReducer, initialState);
   const addItem = (item) => {
      dispatchCart({ type: "ADD", item });
   };
   const removeItem = (id) => {
      dispatchCart({ type: "REMOVE", id });
   };
   const { items, totalAmount } = cartState;
   const cartContext = {
      items,
      totalAmount,
      addItem,
      removeItem,
   };
   return (
      <CartContext.Provider value={cartContext}>
         {children}
      </CartContext.Provider>
   );
};

export default CartProvider;
