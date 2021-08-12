import React from "react";
import mealsImage from "../../Assets/Images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
   return (
      <>
         <header className="header">
            <h1>Meals</h1>
            <HeaderCartButton />
         </header>
         <div className="main__image">
            <img src={mealsImage} alt="A table full of delicious foods!" />
         </div>
      </>
   );
};

export default Header;
