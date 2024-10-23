import React, { useState, useEffect } from 'react';
// import './TopPerformers.scss';
import '../PriceAlerts/TrendingCoins.scss';

const NewCoins = () => {
  const [newCoins, setNewCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/coins')
      .then(response => response.json())
      .then(data => {
        const sortedCoins = data.filter(coin => coin.is_new).slice(0, 7);
        setNewCoins(sortedCoins);
      });
  }, []);

  return (
    <div className="new-coins anti-design">
      <h3>Newly Added Coins</h3>
      <ul style={{ textAlign: 'left' }}>
        {newCoins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewCoins;
