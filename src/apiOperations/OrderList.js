import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const OrderList = () => {
    const [data, setData] = useState([])
    const [staticData, setStaticData] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
         getAPI()
    }, [])

    const getAPI = () => {
        fetch('https://northwind.vercel.app/api/orders')
        .then(response => response.json())
        .then(d => 
            {setData(d) 
            setStaticData(d)});

            console.log("useeffect")

    }


    const getData = () => {
        setData(staticData.slice(0,count))

      
    }

    return (
        <div>
            <div>
                <label>Giriniz</label>
                <input type="text" onChange={(e) => setCount(prev => e.target.value)} />
                <button onClick={getData}>Getir</button>
            </div>
            <table>
                <tr>
                    <th>Customer Id</th>
                    <th>ShipName</th>
                    <th>City</th>
                </tr>
                {data.map((item, key) => 
                     <tr key={key}>
                        <td>{item.customerId}</td>
                        <td>{item.shipName}</td>
                        <td>{item.shipAddress.city}</td>
                    </tr>
                )}
            </table>

        </div>
    )
}

export default OrderList