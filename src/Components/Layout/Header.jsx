import React from "react";
import mealsImage from "../../Assets/Images/meals.jpg";

const Header = () => {
   return (
      <>
         <header className="header">
            <h1>Meals</h1>
            <button>Cart</button>
         </header>
         <div className="main__image">
            <img src={mealsImage} alt="A table full of delicious foods!" />
         </div>
      </>
   );
};

export default Header;
