import React, { useState } from "react";
import { fetchPosts, deletePost } from "../api/api";
import { useQuery, useMutation } from "@tanstack/react-query";
import "../style/fetchRq.css"; 

const FetchRq = () => {
  const [pageNo, setPageNo] = useState(1);


  const getPostData = async () => {
    try {
      const res = await fetchPosts(pageNo, 3); // Limit to 3 items per page
      return res.status === 200 ? res.data : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  //queryKey is as useState and queryFn is as useEffect in react-query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNo],    //to refatch data when pageNo changes then you have to add pageNo in QueryeKey. only then it will refetch data
    // queryKey: ["posts"], //if you want to fetch all posts at once then you can use this
    queryFn: getPostData,
    keepPreviousData: true,
  });

  //useMutations hook is used to create, update or delete data
  //!Here we are going to delete the post using useMutation hook.
  const deleteMutation = useMutation({
     mutationFn: (id) => deletePost(id), //deletePost is a function that will delete the post
  })


  //useQuery provides isLoading, isError, data, error and many more properties whoch makes it easy to handle loading and error states
  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="container">
      <h1 className="title">React Query Learning</h1>

      <div className="card-container">
        {data?.map((item) => {
          const { id, title, body } = item;
          return (
            <>
            
            <div className="card" key={id}>
              <h2>{id}</h2>
              <h3>{title}</h3>
              <p>{body}</p>
              <button onClick={() => deleteMutation.mutate(id)}>Delete</button>
            </div>
            
            </>
          );
        })}
      </div>
{/** here we have to make the button disabled when it hit the limit as below 1 and more than 3 */}
      <div className="pagination">
        <button onClick={() => setPageNo((prev) => Math.max(prev - 1, 1))} disabled={pageNo === 1}>
          PREV
        </button>
        <p style={{color: "black"}}>{pageNo}</p>
        <button onClick={() => setPageNo((prev) => prev + 1)} disabled={data.length < 3}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default FetchRq;
