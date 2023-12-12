import React from 'react'
import { useContext } from 'react'
import AppContext from './Context API/AppContext'


const stories = () => {
    const { hits, nbPages , removePost , isLoading } = useContext(AppContext)

 if(isLoading){
    return(
        <div className='flex justify-center'>
        <p className='text-slate-400'>Loading...</p>
        </div>
    )
 }

   

    return (
        <>
            {hits.map((currPost) => {
                const { title, url, author, num_comments } = currPost
                return <>
                 <div className="card p-16 bg-white rounded-md shadow-md to-blue-950 flex justify-center ">
                <div className="stories-div  flex flex-col justify-center w-1/2 bg-slate-200 shadow-lg rounded-md">
                <h2 className='p-4 text-2xl'>{title}</h2>
                <p className=' text-slate-400 text-xl p-4'>By <span>{author}</span> | <span>{num_comments}</span> Comments</p>
                <div className="card-button">
                <div className="button-div flex justify-between p-4 text-lg">
                <a className='text-blue-400 rounded-md border-2' href={url} target="_blank">Readmore</a>
                <a className='text-red-400 rounded-md' href="#" onClick={() => removePost(currPost)}>Remove</a>
                </div>
                </div>
                 </div>
                 </div>
                </>
            })}
        </>
    )
}

export default stories