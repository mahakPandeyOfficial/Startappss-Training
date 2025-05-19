import React from 'react'
import blogposts from '../../data/blogposts';
import BlogCard from './BlogCard';

function BlogList() {
  return (
    <div className="blog-list">
    {blogposts.map(post => (
      <BlogCard key={post.id} {...post} />
    ))}
  </div>
  )
}

export default BlogList