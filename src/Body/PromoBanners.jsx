import React, { useEffect, useState } from 'react';
import './PromoBanners.css';
import { Link } from "react-router-dom";
 
 
const PromoBanners = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN') // Используй API для новостей
      .then(response => response.json())
      .then(data => {
        setNews(data.Data.slice(0, 4)); // Ограничиваем количество новостей
      });
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <>
    {/* <h2>Crypto News</h2> */}
    <section className="promo-banners">
      <h2>Crypto News</h2>
      <div className="promo-container">
        {news.map((post) => (
          <div key={post.id} className="promo-card">
            <h3>{post.title}</h3>
            {/* <p>{post.body}</p> */}
            <p>{truncateText(post.body, 100)}</p> {/* Limit text to 100 characters */}
            {/* <Link key={post.url}> */}
              <a href={post.url} className="post-btn" target="_blank">
                Read
              </a>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </section>
    </>
    
  );
};

export default PromoBanners;
