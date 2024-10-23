import React, { useState, useEffect } from 'react';
// import './TopPerformers.scss';
import '../PriceAlerts/TrendingCoins.scss';

const GlobalStats = () => {
  const [globalStats, setGlobalStats] = useState({});

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/global')
      .then(response => response.json())
      .then(data => {
        setGlobalStats(data);
      });
  }, []);

  return (
    <div className="global-stats anti-design">
      <h3>Global Cryptocurrency Market Stats</h3>
      <ul style={{ textAlign: 'left' }}>
        <li>Market Cap: ${globalStats.market_cap_usd?.toLocaleString()}</li>
        <li>24h Volume: ${globalStats.volume_24h_usd?.toLocaleString()}</li>
        <li>Active Cryptocurrencies: {globalStats.cryptocurrencies_number}</li>
        <li>Active Markets: {globalStats.markets_number}</li>
      </ul>
    </div>
  );
};

export default GlobalStats;
