import React, { useReducer } from "react";
import CartContext from "./cartContext";

const initialState = {
   items: [],
   totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
   const { type, item } = action;
   switch (type) {
      case "ADD":
         return {
            items: { ...state, item },
            totalAmount: state.totalAmount + item.price * item.amount,
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
      dispatchCart({ type: "REMOVE", id })
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
