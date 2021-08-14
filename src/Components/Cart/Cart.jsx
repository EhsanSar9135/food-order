import React, { useContext } from "react";
import CartContext from "../../context/cartContext";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = ({ onHideCart }) => {
   const cartCtx = useContext(CartContext);

   const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
   const hasItems = cartCtx.items.length > 0;

   const cartItemAddHandler = (item) => {};
   const cartItemRemoveHandler = (id) => {};

   const cartItems = (
      <ul className="cart-items">
         {cartCtx.items.map((item) => (
            <CartItem
               key={item.id}
               item={item}
               onAdd={cartItemAddHandler}
               onRemove={cartItemRemoveHandler}
            />
         ))}
      </ul>
   );
   return (
      <Modal onHideCart={onHideCart}>
         {cartItems}
         <div className="total">
            <span>Total Amount</span>
            <span>{totalAmount}</span>
         </div>
         <div className="actions">
            <button onClick={onHideCart} className="button--alt">
               Close
            </button>
            {hasItems && <button className="button">Order</button>}
         </div>
      </Modal>
   );
};

export default Cart;
