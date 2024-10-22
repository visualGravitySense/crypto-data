import React, { useState, useEffect } from 'react';
import './TopPerformers.scss';

const TopPerformers = () => {
  const [performers, setPerformers] = useState([]);
  
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(data => {
        const sortedBy1h = data.sort((a, b) => b.quotes.USD.percent_change_1h - a.quotes.USD.percent_change_1h).slice(0, 3);
        const sortedBy24h = data.sort((a, b) => b.quotes.USD.percent_change_24h - a.quotes.USD.percent_change_24h).slice(0, 3);
        const sortedBy7d = data.sort((a, b) => b.quotes.USD.percent_change_7d - a.quotes.USD.percent_change_7d).slice(0, 3);
        setPerformers({
          oneHour: sortedBy1h,
          oneDay: sortedBy24h,
          oneWeek: sortedBy7d
        });
      });
  }, []);
  
  return (
    <div className="top-performers">
      <h3>Top Performers</h3>
      <div className="performance-category">
        <h4>1 Hour</h4>
        <ul>
          {performers.oneHour && performers.oneHour.map((coin) => (
            <li key={coin.id}>{coin.name}: {coin.quotes.USD.percent_change_1h}%</li>
          ))}
        </ul>
      </div>
      <div className="performance-category">
        <h4>24 Hours</h4>
        <ul>
          {performers.oneDay && performers.oneDay.map((coin) => (
            <li key={coin.id}>{coin.name}: {coin.quotes.USD.percent_change_24h}%</li>
          ))}
        </ul>
      </div>
      <div className="performance-category">
        <h4>7 Days</h4>
        <ul>
          {performers.oneWeek && performers.oneWeek.map((coin) => (
            <li key={coin.id}>{coin.name}: {coin.quotes.USD.percent_change_7d}%</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopPerformers;
