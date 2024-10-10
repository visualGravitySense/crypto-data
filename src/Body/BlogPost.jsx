import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./BlogPost.css"; 


function BlogPost() {
  const { postId } = useParams(); 
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    
    import(`../posts/${postId}.md`)
      .then((res) => fetch(res.default))
      .then((response) => response.text())
      .then((text) => setPostContent(text))
      .catch((err) => console.error('Error loading post:', err));
  }, [postId]);

  return (
    <div className="blog-post">
      {content ? <ReactMarkdown>{content}</ReactMarkdown> : <p>Loading...</p>}
    </div>
  );
};

export default BlogPost;
