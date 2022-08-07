import React from 'react'
import { baseService } from '../network/services/baseServices'

const CategoryList = ({categoryList,handleRefresh}) => {
   
    const deleteCategory = async(id) => {
       try {
       await baseService.delete(`/categories/${id}`)
       handleRefresh()
       } catch (error) {
         console.log("delete error",error);
       }
    }
  
  return (
    <div>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Description</th>
    <th>Delete</th>
  </tr>
    {
        categoryList.map((item,key) => (
            <tr key={key}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td><button onClick={() => deleteCategory(item.id)}>Delete</button></td>
            </tr>
        ))
    }
    </div>
  )
}

export default CategoryList
