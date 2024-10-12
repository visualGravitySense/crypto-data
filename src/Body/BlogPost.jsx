import React from 'react';
import PostComponent from './PostComponent';

const BlogPost = () => {
  // Пример контента в формате Markdown
  const markdownContent = `
# Welcome to the Blog!
Here you can see various posts written in **Markdown** format.

## Features
- Easy to write
- Supports **bold**, *italic*, and more
- Rendered as HTML in React

Enjoy reading!
`;

  return (
    <div className="blog-section">
      <h2>All Blog Posts</h2>
      {/* Передаем markdownContent как пропс в BlogPost */}
      <PostComponent content={markdownContent} />
    </div>
  );
};


export default BlogPost;
