import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { baseService } from '../network/services/baseServices'

const SupplierDetailPage = () => {
    const [supplier,setSupplier] = useState({})
    //const {id} = useParams()
    const param = useParams()
    
    useEffect(() => {
        getData()
        
    },[])

    

    const getData =async () => {
        const data =  await baseService.get(`/suppliers/${param.id}`)
        setSupplier(data)
    }

    console.log(supplier);
    
  return (
    <div>
           <h1>SUPP DETAİL PAGE</h1>

            <ul>
              <li>{supplier.id}</li>
              <li>{supplier.companyName}</li>
              <li>{supplier.contactName}</li>
              <li>{supplier.address?.city}</li>
            </ul>

          
    
    </div>
  )
}

export default SupplierDetailPage
