import React, { useEffect, useState } from 'react'

const Test = () => {
   
    const [ay,setAy] = useState([])

   

    useEffect(() => {
         
        //getData()

    },[])

    // const getData = async () => {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': 'b809236434mshc1b62337e19d6c6p1eab03jsn0028c4d052dd',
    //             'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
    //         }
    //     };
        
    //  await   fetch('https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=60&currentPage=1/', options)
    //         .then(response => response.json())
    //         .then(response => setAy(response.products))
    //         .catch(err => console.error(err));
    // }

    // const a = async() =>{
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Key': 'b809236434mshc1b62337e19d6c6p1eab03jsn0028c4d052dd',
    //       'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
    //     }
    //   };
      
    //  await fetch('https://sephora.p.rapidapi.com/categories/v2/list-root', options)
    //     .then(response => response.json())
    //     .then(response => setAy(response))
    //     .catch(err => console.error(err));
    // }
 
 
  return (
    <div>   
        {/* {ay.map((item,index) => (
          <ul>
            <li><img src= {item.image135}/>
            </li>
          </ul>
        ))}
        */}
          
    </div>
  )
}

export default Test
