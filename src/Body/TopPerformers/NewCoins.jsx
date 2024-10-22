import React, { useState, useEffect } from 'react';
import './TopPerformers.scss';

const NewCoins = () => {
  const [newCoins, setNewCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/coins')
      .then(response => response.json())
      .then(data => {
        const sortedCoins = data.filter(coin => coin.is_new).slice(0, 3);
        setNewCoins(sortedCoins);
      });
  }, []);

  return (
    <div className="new-coins">
      <h3>Newly Added Coins</h3>
      <ul>
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
