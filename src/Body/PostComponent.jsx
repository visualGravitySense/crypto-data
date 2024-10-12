import React from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ content }) => {
  return (
    <div className="blog-post">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;