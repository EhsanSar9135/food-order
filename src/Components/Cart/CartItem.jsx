import React from "react";

const CartItem = ({ item }) => {
   const { price, name, amount, onAdd, onRemove } = item;
   const fixedPrice = `$${price.toFixed(2)}`;

   return (
      <li className="cart-item">
         <div>
            <h2>{name}</h2>
            <div className="summary">
               <span className="price">{fixedPrice}</span>
               <span className="amount">x {amount}</span>
            </div>
         </div>
         <div className="actions">
            <button onClick={onRemove}>−</button>
            <button onClick={onAdd}>+</button>
         </div>
      </li>
   );
};

export default CartItem;
