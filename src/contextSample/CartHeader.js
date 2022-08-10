import React, { useContext } from 'react'
import { Context, useCart } from '../contexts/CartContext'
import CartList from './CartList'

const CartHeader = () => {
  const {cart} = useCart()
  return (
    <div>
        <h1>Cart Count : {cart.length} </h1>
        
    </div>
  )
}

export default CartHeader
