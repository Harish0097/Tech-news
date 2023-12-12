import React from 'react'
import { useContext } from'react'
import AppContext from './Context API/AppContext'


const pagination = () => {
  const { page, nbPages, getPrev, getNext } = useContext(AppContext)



  return (
    
    <>
   <>
   <div className='flex justify-center gap-4 p-4'>
   <button className='bg-black rounded text-white p-2' onClick={()=>getPrev()}>PREV</button>
   <p className="text-slate-400 pt-2"> {page} of {nbPages}</p>
   <button className='bg-black rounded text-white p-2' onClick={()=>getNext()}>NEXT</button>
   </div>
   </>
    </>
   
  )
}

export default pagination