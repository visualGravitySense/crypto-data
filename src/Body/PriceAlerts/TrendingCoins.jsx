import React, { useState, useEffect } from 'react';
import './TrendingCoins.scss';
import '../CoinPage/CryptoTable.scss';

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
    <div className="trending-coins anti-design top-cryptos-volume">
      <h3 className="anti-title">Trending Coins</h3>
      <ul className="coins-list">
        {trendingCoins.map((coin) => (
          <li className="coin-item" key={coin.id}>
            <span>{coin.name} ({coin.symbol})</span>: 
            <span>{coin.quotes.USD.percent_change_24h}%</span> in the last 24 hours
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
