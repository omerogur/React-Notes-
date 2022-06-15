import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const AddCategory = () => {
    const [categoryList, setCategoryList] = useState([])
    const [category, setCategory] = useState({ name: "", description: "" })
    const [refresh, setRefresh] = useState(true)  
    useEffect(() => {
        getCategories();
        console.log("github test");
    }, [refresh])


    const getCategories = () => {
        fetch('https://northwind.vercel.app/api/categories')
            .then(response => response.json())
            .then(d => setCategoryList(d));
    }

    const deleteCategory = (id) => {
        const config = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        fetch(`https://northwind.vercel.app/api/categories/${id}`, config)
            .then(response => response.json())
            .then(data => {
                setRefresh(prev => !prev)
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const addCategory = () => {

        const data = { description: category.description, name: category.name };
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        fetch('https://northwind.vercel.app/api/categories', config)
            .then(response => response.json())
            .then(data => {
                setRefresh(!refresh)
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <div>
                <label >Name:</label>
                <input type="text" onChange={(e) => setCategory(prev => { return { ...prev, name: e.target.value } })} />
            </div>
            <div>
                <label >Description:</label>
                <input type="text" onChange={(e) => setCategory(prev => { return { ...prev, description: e.target.value } })} />
            </div>

            <div><button onClick={addCategory}>Add</button></div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Description</th>
                    <th>Name</th>
                </tr>
                {
                    categoryList && categoryList.map((category, key) => {
                        return <tr key={key}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <button onClick={()=> deleteCategory(category.id)}>Delete</button>
                        </tr>
                    })}
            </table>
        </div>
    )
}

export default AddCategory