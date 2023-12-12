import React from 'react'
import { useContext } from 'react'
import AppContext from './Context API/AppContext'

const stories = () => {
    const { hits, nbPages } = useContext(AppContext)

    // if (isLoading) {
    //     return (
    //         <>
    //         <h1>Loading...</h1>
    //         </>
    //     )
    // }

    return (
        <>
            <h2>My Tech news post</h2>
            {hits.map((currPost) => {
                return <h2>{currPost.title}</h2>
            })}
        </>
    )
}

export default stories