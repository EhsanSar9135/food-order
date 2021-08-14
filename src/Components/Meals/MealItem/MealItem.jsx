import React, { useContext } from "react";
import CartContext from "../../../context/cartContext";
import MealItemForm from "./MealItemForm";

const MealItem = ({ meal }) => {
   const cartCtx = useContext(CartContext);

   const { name, description, price, id } = meal;
   const fixedPrice = `$${price.toFixed(2)}`;

   const onAddToCartHandler = (amount) => {
      cartCtx.addItem({
         id,
         name,
         price,
         amount,
      });
   };
   return (
      <li className="meal">
         <div>
            <h3>{name}</h3>
            <div className="description">{description}</div>
            <div className="price">{fixedPrice}</div>
         </div>
         <div>
            <MealItemForm onAddToCart={onAddToCartHandler} />
         </div>
      </li>
   );
};

export default MealItem;
