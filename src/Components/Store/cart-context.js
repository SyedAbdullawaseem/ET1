import React, { useState } from "react"



// export const CartContext = React.createContext({
//   items: [],
//   totalAmount: 0,
//   addItem: (item) => {},
//   removeItem: (id) => {}
// })


// export default CartContext;

const AuthContext=React.createContext({
  token : '',
  isLoggedIn : false,
  login : (token)=>{},
  logout : ()=>{}
})

export const AuthContextProvider=props=>{

  const initialToken=localStorage.getItem('token')
  const  [token, setToken]= useState(initialToken)

  const userIsLoggedIn=!!token;

  const loginHandler=(token)=>{
      localStorage.setItem('token', token)
      setToken(token)
  }

  const logOutHandler=()=>{
      setToken(null)
      localStorage.removeItem('token')
  }

  const contextValue={
      token : token,
      isLoggedIn : userIsLoggedIn,
      login : loginHandler,
      logout : logOutHandler
  }
  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
export default AuthContext