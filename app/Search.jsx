import React from 'react'
import { useContext } from 'react'
import AppContext from './Context API/AppContext'


const search = () => {
  const { query, searchPost } = useContext(AppContext)  
 
  return (
    <>
    <div className='flex justify-center p-4'>
    <input className=' border-2' type="text" placeholder="Search" onChange={(e) => searchPost(e.target.value)}/>
    </div>
    </>
  )
}

export default search