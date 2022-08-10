import React, { useContext, useEffect, useState } from 'react'
import { Context, useCart } from '../contexts/CartContext'
import {baseService} from '../network/services/baseServices'
import CartList from './CartList'

const ProductList = () => {

  const[product,setProduct]= useState([])
  const {cart,setCart}= useCart()

  useEffect(() => {
    getProoducts();
  },[])

  const getProoducts = async() => {
    try {
      const data = await  baseService.get("/products");
      setProduct(data);
    } catch (error) {
        console.log(" product error",error);
    }
  }
console.log(cart);

  const addToCart =(product) => {
    const productControl = cart.find(q => q.id === product.id)
    if(productControl){
       productControl.quantity += 1
       setCart([...cart])
    }else{
        const cartProduct = {
            id:product.id,
            name:product.name,
            price:product.unitPrice,
            quantity:1
        }
        setCart(prev => [...prev,cartProduct])
    }
    
}

const removeItem = (id) => {
  let findItem = cart.find(q => q.id === id)
  if(findItem.quantity>1){
     findItem.quantity -=1;
     setCart([...cart])
  }else{
    setCart(prev => prev.filter(item => item.id !==id))
  }
  console.log(findItem);
 // setCart(prev => prev.filter(item => item.id !==id))
}

  return (
    <>
      <CartList  removeItem={removeItem} />
       <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Add Cart</th>
                </tr>
                {
                    product && product.map((item, key) => {
                        return <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <button onClick={()=> addToCart(item)}>Add Cart</button>
                        </tr>
                    })}
            </table>
    </>
  )
}

export default ProductList
