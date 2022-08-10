import {  createContext, useContext, useState } from "react";


 const Context = createContext(null)

 export const  useCart = () => useContext(Context)

const CartProvider = ({children}) => {

   const [cart,setCart] = useState([])

   const values= {cart,setCart}

    return(
        <Context.Provider value={values}>{children}</Context.Provider>
    )
}


export default CartProvider

