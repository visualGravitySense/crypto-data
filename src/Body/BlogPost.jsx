import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./BlogPost.css"; // Custom styling if necessary

// const BlogPost = () => {
//   const { postId } = useParams();
//   const [content, setContent] = useState("");

function BlogPost() {
  const { postId } = useParams(); // Получаем postId из URL
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    // Загружаем соответствующий .md файл
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
