import React from 'react'
import { useContext } from 'react'
import AppContext from './Context API/AppContext'


const search = () => {
  const data = useContext(AppContext)
 
  return (
    <>
    <div>search{data}</div>
    </>
  )
}

export default search