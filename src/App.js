import React,{Fragment,useState} from 'react';
import NavBar from './Components/Layout/NavBar';
// import Store from './Components/Store/Store';
import BtnCart from './Components/Button/BtnCart';
import Cart from './Components/Cart/Cart';
import Heading from './Components/Store/Heading';
import CartProvider from './Components/ContextApi/CartProvider';
import cartElements from './Utils/CartData';



const App =() => {

  const [isShown , setIsShown] = useState(false);

  const ShowCartHandlar = () => {
    setIsShown(true);
  };

  const RemoveCartHandlar = ()=>{

      setIsShown(false)
  }

  return (
    <Fragment>
      {isShown && <Cart onRemoveCart={RemoveCartHandlar} />}
      <NavBar
        brand="E-Commerce"
        homePage="Home"
        store="Store"
        about="About Us"
        cart={<BtnCart onShowCart={ShowCartHandlar} />}
      />
      <cartElements/>
      <CartProvider/>
      <Heading />
    </Fragment>
  );
}
export default App;