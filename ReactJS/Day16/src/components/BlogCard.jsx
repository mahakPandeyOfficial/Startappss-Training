import React from 'react';
import './BlogCard.css';

const BlogCard = ({ title, date, author, excerpt, readMoreLink }) => {
  return (
    <div className="blog-card-wrapper">
      {/* Stripe column */}
      <div className="blog-left-stripe"></div>

      {/* Content area */}
      <div className="blog-card">
        <div className="blog-meta">
          <span className="blog-date">{date}</span>
          <span className="blog-author">by {author}</span>
        </div>
        <h2 className="blog-title">{title}</h2>
        <p className="blog-excerpt">{excerpt}</p>
        <div className="read-more">
          <a href={readMoreLink}>Read More...</a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
