import React from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import "./Styles/App.scss";

const App = () => {
   return (
      <>
         <Cart />
         <Header />
         <main>
            <Meals />
         </main>
      </>
   );
};

export default App;
