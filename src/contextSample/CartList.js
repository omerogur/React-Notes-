import React from 'react'
import { useCart } from '../contexts/CartContext'

const CartList = ({removeItem}) => {
    const{cart,setCart} = useCart() 

    
  return (
    <>
          {
            cart.map(item => (
                <ul>

                
                <li>
                {item.name}  - {item.price*item.quantity} TL <button onClick={() => removeItem(item.id)}>DELETE</button>
                </li>
                </ul>
            ))
          }  
    </>
  )
}

export default CartList
