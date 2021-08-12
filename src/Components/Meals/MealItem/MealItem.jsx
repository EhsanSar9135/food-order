import React from "react";

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
         <div></div>
      </li>
   );
};

export default MealItem;
