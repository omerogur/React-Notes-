import { useState } from 'react'
import { useEffect } from 'react'

const CategoryList = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('https://northwind.vercel.app/api/categories')
            .then(response => response.json())
            .then(d => setData(d));
    }, [])

    console.log(data);
    return (
        <div>

            {data.map((item, key) => {
                return <div key={key}>
                    <li>{item.name}</li>
                </div>
            })}


        </div>
    )
}

export default CategoryList