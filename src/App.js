import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Store from "./Components/Store/Store";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./Components/Navigation/About";
import Home from "./Components/Navigation/Home";
import ContactUs from "./Components/Navigation/ContactUs";
import AuthForm from "./Components/Navigation/Login";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />

        <main>
          <Route path="/Contact Us">
            <ContactUs />
          </Route>

          <Route path="/About">
            <About />
          </Route>
        </main>
        <Route path="/Home">
          <Home />
        </Route>
        {/* <Redirect> */}
          <Route path="/Login">
            <AuthForm />
          </Route>
          <Route path="/Store">
            <Store />
            <Meals />
          </Route>
        {/* </Redirect> */}
      </CartProvider>
    </div>
  );
};

export default App;
