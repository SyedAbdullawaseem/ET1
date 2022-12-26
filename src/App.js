import React,{ useState} from 'react';
import Header from './Components/Layout/Header';
import Store from './Components/Store/Store';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';

const App =() => {

  const [cartIsShown, setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true)
  }

  const hideCartHandler=()=>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
     <main>
      <Meals/>
     </main>
      <Store/>
    </CartProvider>
  );
}

export default App;