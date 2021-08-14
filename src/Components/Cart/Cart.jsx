import React from "react";
import Modal from "../UI/Modal";

const Cart = ({ onHideCart }) => {
   const cartItems = (
      <ul className="cart-items">
         {[{ id: "c1", name: "Sushi", amount: 2, price: "12.99" }].map(
            ({ name, id }) => (
               <li key={id}>{name}</li>
            )
         )}
      </ul>
   );
   return (
      <Modal onHideCart={onHideCart}>
         {cartItems}
         <div className="total">
            <span>Total Amount</span>
            <span>35.62</span>
         </div>
         <div className="actions">
            <button onClick={onHideCart} className="button--alt">
               Close
            </button>
            <button className="button">Order</button>
         </div>
      </Modal>
   );
};

export default Cart;
