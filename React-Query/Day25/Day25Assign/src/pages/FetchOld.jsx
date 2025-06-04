import React from 'react'
import { useEffect, useState } from 'react';
import { fetchPosts } from '../api/api'; // Adjust the import path as necessary

const FetchOld = () => {
    
    const [post, setPost ]= useState([]);

    const getPostData = async () => {
       try {
         const res = await fetchPosts();
         console.log(res);
         res.status === 200 ? setPost(res.data) : [];
         
       }catch (error) {
        console.error(error);
        return [];
       }
    }

    useEffect(() => {
       getPostData();
    })


  return (
    <div>
      <h1>Fetch Old</h1>
      <ul>
        {post.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FetchOld
