import React, { useState } from 'react'
import { baseService } from '../network/services/baseServices'

const CategoryForm = ({ handleRefresh }) => {
    const [category, setCategory] = useState({ name: "", description: "" })


    const addCategory = async () => {
        try {
            const { name, description } = category;
            if (name && description) {
                const data = { name, description }
                await baseService.post(`/categories`, data)
                handleRefresh()


            } else {
                throw new Error("REQUIRED ERROR !!!!!")
            }
        } catch (error) {
            console.log("add data error", error);
        }
        setCategory({ name: "", description: "" })
    }

    return (
        <>
            <div>
                <label >Name:</label>
                <input type="text"
                    onChange={(e) => setCategory(prev => ({ ...prev, name: e.target.value }))}
                    value={category.name} />
            </div>
            <div>
                <label >Description:</label>
                <input type="text"
                    onChange={(e) => setCategory(prev => { return { ...prev, description: e.target.value } })}
                    value={category.description} />
            </div>

            <div><button onClick={addCategory}>Add</button></div>
        </>
    )
}

export default CategoryForm
