import React from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import "./Styles/App.scss";

const App = () => {
   return (
      <>
         <Header />
         <main>
            <Meals />
         </main>
      </>
   );
};

export default App;
