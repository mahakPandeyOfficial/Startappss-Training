import React, { useState } from "react";
import { fetchPosts } from "../api/api";
import { useQuery } from "@tanstack/react-query";
import "../style/fetchRq.css"; // External CSS file

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

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNo],
    queryFn: getPostData,
    keepPreviousData: true,
  });

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="container">
      <h1 className="title">React Query Learning</h1>

      <div className="card-container">
        {data?.map((item) => {
          const { id, title, body } = item;
          return (
            <div className="card" key={id}>
              <h2>{id}</h2>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          );
        })}
      </div>

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
