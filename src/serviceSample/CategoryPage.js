import React from 'react'
import { useEffect } from 'react'
import { baseService } from '../network/services/baseServices';

const CategoryPage = () => {
    
    useEffect(() => {
       getData();
    },[])

   const getData = () =>{
     baseService.get("/categories")
   }




  return (
    <div>
      CategoryPage
    </div>
  )
}

export default CategoryPage
