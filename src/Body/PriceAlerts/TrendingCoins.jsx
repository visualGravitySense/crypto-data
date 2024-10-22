import React, { useState, useEffect } from 'react';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(data => {
        const trending = data.filter(coin => coin.quotes.USD.volume_24h > 1000000)
                             .sort((a, b) => b.quotes.USD.percent_change_24h - a.quotes.USD.percent_change_24h)
                             .slice(0, 5);
        setTrendingCoins(trending);
      });
  }, []);

  return (
    <div className="trending-coins">
      <h3>Trending Coins</h3>
      <ul>
        {trendingCoins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.percent_change_24h}% in the last 24 hours
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
