import React, { useEffect, useState } from 'react';
import './CryptoTable.scss';

function TopBy24() {
    const [topVolumeCoins, setTopVolumeCoins] = React.useState([]);
  
    // Получение топ-3 криптовалют по объему торгов за последние 24 часа
    React.useEffect(() => {
      fetch('https://api.coinpaprika.com/v1/tickers?limit=100')
        .then((response) => response.json())
        .then((data) => {
          // Сортировка по объему торгов за 24 часа и выбор топ-3
          const sortedData = data.sort(
            (a, b) => b.quotes.USD.volume_24h - a.quotes.USD.volume_24h
          );
          setTopVolumeCoins(sortedData.slice(0, 3));
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div className="top-cryptos-volume">
        <h3>Top 3 Cryptocurrencies by Volume (24h)</h3>
        <ul>
          {topVolumeCoins.map((coin) => (
            <li key={coin.id}>
              <span>{coin.name}</span>
              <span>Volume: ${coin.quotes.USD.volume_24h.toLocaleString()}</span>
              <span>Price: ${coin.quotes.USD.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default TopBy24;