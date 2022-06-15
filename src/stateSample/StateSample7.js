import React from 'react'
import { useState } from 'react'
import { users } from '../data/User'

const StateSample7 = () => {
    const [userList, setUserList] = useState(users)
    const [filter, setFilter] = useState(users)
    const [data,setData] = useState({name:"",username:"",email:""})
    const [count, setCount] = useState(0)

    const deleteUser =(id) => {
       id && setUserList(prev => {
          return  prev.filter(q => q.id !== id)
        })
        
    }

    const addUser = () =>{
        
        setUserList(prev => [...prev,data])
        setData({name:"",username:"",email:""})
        console.log(data);
    }

    const getUser = () => {
        
        setUserList(prev => prev.slice(0,count))
    }

    return (
        <div>

        <div>
            <label>Name:</label>
            <input type="text" value={data.name} onChange={(e) => setData({...data,name:e.target.value})} />
        </div>

        <div>
            <label>UserName:</label>
            <input type="text"  value={data.username} onChange={(e) => setData({...data,username:e.target.value})} />
        </div>

        <div>
            <label>Email:</label>
            <input type="text" value={data.email} onChange={(e) => setData({...data,email:e.target.value})}  />
        </div>

        <div>
            <button onClick={addUser}>Ekle</button>
        </div>

        <div>
        <input type="text" onChange={(e) => setCount(e.target.value)} />
            <button onClick={() => getUser()}>Getir</button>
        </div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>email</th>
                    <th>Delete</th>
                </tr>

                {userList.map((user,key) =>
                    <tr key={key}>
                        <td>{user.name} </td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </tr>
                )}
            </table>
        </div>
    )
}

export default StateSample7