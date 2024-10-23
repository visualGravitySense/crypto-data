import React, { useState, useEffect } from 'react';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN') // Используй API для новостей
      .then(response => response.json())
      .then(data => {
        setNews(data.Data.slice(0, 4)); // Ограничиваем количество новостей
      });
  }, []);

  return (
    <div className="news-feed">
      <h3>Crypto News</h3>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
