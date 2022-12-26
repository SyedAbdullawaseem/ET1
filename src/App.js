import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Store from "./Components/Store/Store";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";
import { Route } from "react-router-dom";
import About from "./Components/Navigation/About";
import Home from "./Components/Navigation/Home";


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
          <Meals />
          <Route path="/About">
            <About />
          </Route>
          
        </main>
        <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Store">
            <Store />
          </Route>
        
        
      </CartProvider>
    </div>
  );
};

export default App;

// import { Route } from 'react-router-dom';

// import Welcome from './pages/Welcome';
// import Products from './pages/Products';

// function App() {
//   return (
//     <div>
//       <Route path="/welcome">
//         <Welcome />
//       </Route>
//       <Route path="/products">
//         <Products />
//       </Route>
//     </div>
//   );
// }

// export default App;
