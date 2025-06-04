import React from "react";
//import { useEffect, useState } from 'react'; replaced by useQuery
import { fetchPosts } from "../api/api"; // Adjust the import path as necessary
import { useQuery } from "@tanstack/react-query"; // Ensure you have react-query installed

const FetchRq = () => {
  // const [post, setPost ]= useState([]);  //Replaced by useQuery

  const getPostData = async () => {
    try {
      const res = await fetchPosts();
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

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['post'],
        queryFn: getPostData
      })

      //by using useQuery, we can directly access data, isLoading , isError and error as it is provided as default by react-query
      if(isLoading) {
        return <div>Loading...</div>;
      }
      if(isError) {
        return <div>Error: {error.message}</div>;
      }

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
