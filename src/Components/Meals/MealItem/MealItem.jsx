import React from "react";
import MealItemForm from "./MealItemForm";

const MealItem = ({ meal }) => {
   const { name, description, price } = meal;
   const fixedPrice = `$${price.toFixed(2)}`;
   return (
      <li className="meal">
         <div>
            <h3>{name}</h3>
            <div className="description">{description}</div>
            <div className="price">{fixedPrice}</div>
         </div>
         <div>
            <MealItemForm />
         </div>
      </li>
   );
};

export default MealItem;
