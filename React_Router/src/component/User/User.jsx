import React from 'react'
import { useParams } from 'react-router-dom'



function User() {

    const {userid} = useParams()
  return (
    <div className='bg-gray-800 p-5 text-4xl text-black'>
      User:{userid}
    </div>
  )
}

export default User
