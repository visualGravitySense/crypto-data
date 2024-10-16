import React, { useEffect, useState } from 'react';
import './PromoBanners.css';
import { Link } from "react-router-dom";

// const posts = [
//   { id: "uiux-ruin-product", description: "UI/UX Design Can Actually Ruin a Product" },
//   { id: "uiux-design", description: "Enhancing User Experience: Key Guidelines for Effective Website Design" },
// ];

const PromoBanners = () => {
  const [posts] = useState([
    {
      id: 'uiux-ruin-product',
      description: 'The Role of NFTs in Digital Art and Beyond',
      
    },
    // {
    //   id: 'uiux-design',
    //   description: 'Enhancing User Experience: Key Guidelines for Effective Website Design',
      
    // },
    
    
  ]);

  return (
    <section className="promo-banners">
      <h2>Community Blog</h2>
      <div className="promo-container">
        {posts.map((post) => (
          <div key={post.id} className="promo-card">
            <h3>{post.id}</h3>
            <p>{post.description}</p>
            <Link to={`/posts/${post.id}`}>
              <a href={post.link} className="post-btn">
                Read
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoBanners;
