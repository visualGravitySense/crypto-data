import React, { useState, useEffect } from 'react';
import './TopPerformers.scss';

const TopExchanges = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/exchanges')
      .then(response => response.json())
      .then(data => {
        const sortedExchanges = data.sort((a, b) => b.adjusted_volume_24h - a.adjusted_volume_24h).slice(0, 3);
        setExchanges(sortedExchanges);
      });
  }, []);

  return (
    <div className="top-exchanges">
      <h3>Top 3 Exchanges by 24h Volume</h3>
      <ul>
        {exchanges.map((exchange) => (
          <li key={exchange.id}>
            {/* {exchange.name}: ${exchange.adjusted_volume_24h.toLocaleString()} */}
            {exchange.name}: ${exchange.adjusted_volume_24h}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopExchanges;
