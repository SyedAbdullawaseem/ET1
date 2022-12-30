import React, { useContext, useState } from "react";
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
import AuthContext from "./Components/Store/cart-context";

const App = () => {
  const authCtx = useContext(AuthContext);
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
          <Route path="/" exact>
            <Redirect to="/Login" />
          </Route>
          {authCtx.isLoggedIn && (
            <Route path="/Contact Us">
              <ContactUs />
            </Route>
          )}

          {/* {!authCtx.isLoggedIn && (
          <Route path='/auth'>
            <AuthPage />
          </Route>
        )} */}

          {authCtx.isLoggedIn && (
            <Route path="/About">
              <About />
            </Route>
          )}
        </main>
        {authCtx.isLoggedIn && (
          <Route path="/Home">
            <Home />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/Login">
            <AuthForm />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/Store">
            <Store />
            <Meals />
          </Route>
        )}
      </CartProvider>
    </div>
  );
};

export default App;
