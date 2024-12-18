import React, { useEffect, useState } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/MAC-2-MAC')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, []) this useffect will come into action when we click the github option , we can have other function also which is called  as loader which can load when we keep mouse on it.
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Repos: {data.public_repos}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/MAC-2-MAC')
    return response.json()
}