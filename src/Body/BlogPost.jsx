import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import PostComponent from './PostComponent';

const BlogPost = () => {

  const { postId } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    // Dynamically import the markdown file based on the route param
    import(`../posts/${postId}.md`)
      .then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((text) => setContent(text));
      })
      .catch((err) => console.error(err));
  }, [postId]);

  // Пример контента в формате Markdown
//   const markdownContent = `
// # Welcome to the Blog!
// Here you can see various posts written in **Markdown** format.

// ## Features
// - Easy to write
// - Supports **bold**, *italic*, and more
// - Rendered as HTML in React

// Enjoy reading!
// `;

  return (
    <div className="blog-post">
      {/* <h2>All Blog Posts</h2> */}
      {/* Передаем markdownContent как пропс в BlogPost */}
      {/* <PostComponent content={markdownContent} /> */}
      {content ? <ReactMarkdown>{content}</ReactMarkdown> : <p>Loading...</p>}
    </div>
  );
};


export default BlogPost;
