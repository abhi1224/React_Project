import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // const [data , setData] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/abhi1224')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])

    const data = useLoaderData()
  return (

    <>
      <div className="p-5 bg-gray-900 flex justify-around items-center gap-6 text-4xl font-semibold text-white">
      <img className='w-32 rounded-xl' src={data.avatar_url} alt="Git Picture" />
       <p> Github :{data.followers}</p>
      
      </div>

    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/abhi1224')
    return response.json()
}