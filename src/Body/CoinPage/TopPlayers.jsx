
import React, { useEffect, useState } from 'react';
import './CryptoTable.scss';
// import '../PriceAlerts/PriceAlerts.scss';

const TopPlayers = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Делаем запрос к CoinPaprika API с использованием fetch
        const response = await fetch('https://api.coinpaprika.com/v1/tickers');
        
        // Проверяем, успешен ли запрос
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Сортируем данные по изменению цены за 24 часа (в процентах)
        const sortedData = data.sort((a, b) => b.quotes.USD.percent_change_24h - a.quotes.USD.percent_change_24h);
        
        // Лидеры роста (первые 3)
        const topGainers = sortedData.slice(0, 3);
        setGainers(topGainers);

        // Лидеры падения (последние 3)
        const topLosers = sortedData.slice(-3).reverse();
        setLosers(topLosers);
      } catch (error) {
        console.error("Error fetching data from CoinPaprika API", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="top-gainers-losers">
      <div className="gainers">
        <h3>Top Gainers</h3>
        <ul>
          {gainers.map((coin) => (
            <li key={coin.id}>
              #{coin.rank} {coin.name} <span>{coin.quotes.USD.percent_change_24h.toFixed(2)}%</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="losers">
        <h3>Top Losers</h3>
        <ul>
          {losers.map((coin) => (
            <li key={coin.id}>
              #{coin.rank} {coin.name} <span>{coin.quotes.USD.percent_change_24h.toFixed(2)}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopPlayers;
