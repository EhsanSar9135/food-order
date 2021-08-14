import React, { useContext } from "react";
import CartContext from "../../context/cartContext";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = ({ onShowCart }) => {
   const cartCtx = useContext(CartContext);
   const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
      return currentNumber + item.amount;
   }, 0);
   return (
      <button onClick={onShowCart} className="button">
         <span className="icon">
            <CartIcon />
         </span>
         <span>Your Cart</span>
         <span className="badge">{numberOfCartItems}</span>
      </button>
   );
};

export default HeaderCartButton;
