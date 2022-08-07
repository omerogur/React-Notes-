import React, { useState } from 'react'
import { useEffect } from 'react'
import { baseService } from '../network/services/baseServices';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';

const CategoryPage = () => {
  const[categoryList,setCategoryList]=useState([])
  const[refresh,setRefresh]=useState(true)
    
    useEffect(() => {
       getData();
    },[refresh])

   const getData =  async () =>{
   try {
    const data = await baseService.get("/categories")
    setCategoryList(data)
   } catch (error) {
     console.log("error",error);
   }
   }

   const handleRefresh = () => {
    setRefresh(prev => !prev)
   }


  return (
    <div>
      <CategoryForm handleRefresh={handleRefresh}/>
      <CategoryList   categoryList={categoryList}  handleRefresh={handleRefresh} />
    </div>
  )
}

export default CategoryPage
