import React from "react";
//import { useEffect, useState } from 'react'; replaced by useQuery
import { fetchPosts } from "../api/api"; // Adjust the import path as necessary
import { useQuery } from "@tanstack/react-query"; // Ensure you have react-query installed

const FetchRq = () => {
  // const [post, setPost ]= useState([]);  //Replaced by useQuery

  const getPostData = async () => {
    try {
      const res = await fetchPosts();
      console.log(res);
      return res.status === 200 ? res.data : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  /*    //Replaced by useQuery
    useEffect(() => { 
       getPostData();
    })
    */

    const { data} = useQuery({
        queryKey: ['post'],
        queryFn: getPostData
      })

  return (
    <div>
      <h1>Fetch with React Query</h1>
      <ul>
        {data?.map((item) => {
          const { id, title, body } = item; // Destructure the item object
          return (
            <li key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchRq;
