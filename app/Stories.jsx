
"use client"
import React from 'react'
import { useEffect } from 'react'

const stories = () => {
    let API = "https://hn.algolia.com/api/v1/search?query=html"
    let isLoading = true
    
    const fetchApi = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)    
        } catch (error) {
            console.log("error")
        }
    }


    useEffect(() => {
        fetchApi(API)
    }, [])

    if (isLoading) {
        return (
            <>
            <h1>Loading...</h1>
            </>
        )
    }

  return (
    <>
    <h2>My Tech news post</h2>
    </>
  )
}

export default stories