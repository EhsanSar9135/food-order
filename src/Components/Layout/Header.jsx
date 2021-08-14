import React from "react";
import mealsImage from "../../Assets/Images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
   return (
      <>
         <header className="header">
            <h1>Meals</h1>
            <HeaderCartButton onShowCart={onShowCart} />
         </header>
         <div className="main__image">
            <img src={mealsImage} alt="A table full of delicious foods!" />
         </div>
      </>
   );
};

export default Header;
