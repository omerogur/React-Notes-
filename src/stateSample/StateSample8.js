import React from 'react'
import { useState } from 'react'
import { products } from '../data/Product'

const StateSample8 = () => {
    const [data, setData] = useState(products)
    const [search, setSearch] = useState("")
    const [price, setPrice] = useState({
        minPrice: 0,
        maxPrice: 0
    })
    const searchInput = () => {
        setData(prev => {
            return products.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()))
        })
    }
    const searchPrice =() => {
        console.log(price);
        let filtered = products.filter(item =>{
            return  item.unitPrice>= price.minPrice && item.unitPrice<=price.maxPrice
        })
        console.log(filtered);
        setData([...filtered])
    }

    return (
        <div>
            <div>
                <label>Search:</label>
                <input type="text" onChange={(e) => setSearch(e.target.value)} />
                <button onClick={searchInput}>Ara</button>
            </div>
            <div>
                <label>min price</label>
                <input type="text" value={price.minPrice} onChange={(e) => setPrice(prev => {return{...prev,minPrice:e.target.value}})} />
                <label>max price</label>
                <input type="text" value={price.maxPrice} onChange={(e) => setPrice({...price,maxPrice:e.target.value})}/>
                <button onClick={searchPrice}>ara</button>
            </div>

            <table>
                <tr>
                    <th>Name</th>
                    <th>unitsInStock</th>
                    <th>unitPrice</th>

                </tr>

                {data.map((user, key) =>
                    <tr key={key}>
                        <td>{user.name} </td>
                        <td>{user.unitsInStock}</td>
                        <td>{user.unitPrice}</td>

                    </tr>
                )}
            </table>
        </div>
    )
}

export default StateSample8