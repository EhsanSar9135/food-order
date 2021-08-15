import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../context/cartContext";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = ({ onShowCart }) => {
   const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
   const cartCtx = useContext(CartContext);
   const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
      return currentNumber + item.amount;
   }, 0);

   const btnClasses = `${"button"} ${btnIsHighlighted} ? "bump" : ""}`;

   const { items } = cartCtx;

   useEffect(() => {
      if (items.length === 0) {
         return;
      }
      setBtnIsHighlighted(true);

      const timer = setTimeout(() => {
         setBtnIsHighlighted(false);
      }, 300);

      return () => {
         clearTimeout(timer);
      };
   }, [items]);

   return (
      <button onClick={onShowCart} className={btnClasses}>
         <span className="icon">
            <CartIcon />
         </span>
         <span>Your Cart</span>
         <span className="badge">{numberOfCartItems}</span>
      </button>
   );
};

export default HeaderCartButton;
