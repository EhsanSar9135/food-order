import React from "react";

const Cart = () => {
   const cartItems = (
      <ul className="cart-items">
         {[{ id: "c1", name: "Sushi", amount: 2, price: "12.99" }].map(
            ({ name }) => (
               <li>{name}</li>
            )
         )}
      </ul>
   );
   return (
      <>
         {cartItems}
         <div className="total">
            <span>Total Amount</span>
            <span>35.62</span>
         </div>
         <div className="actions">
            <button className="button--alt">Close</button>
            <button className="button">Order</button>
         </div>
      </>
   );
};

export default Cart;
