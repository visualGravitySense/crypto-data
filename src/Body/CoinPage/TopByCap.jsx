import React, { useEffect, useState } from 'react';
import './CryptoTable.scss';

function TopByCap() {
    const [topCoins, setTopCoins] = React.useState([]);
  
    // Получение топ-3 криптовалют по рыночной капитализации
    React.useEffect(() => {
      fetch('https://api.coinpaprika.com/v1/tickers?limit=3')
        .then((response) => response.json())
        .then((data) => {
          // Сортировка по рыночной капитализации и выбор топ-3
          const sortedData = data.sort(
            (a, b) => b.quotes.USD.market_cap - a.quotes.USD.market_cap
          );
          setTopCoins(sortedData.slice(0, 3));
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div className="top-cryptos">
        <h3>Top 3 Cryptocurrencies by Market Cap</h3>
        <ul>
          {topCoins.map((coin) => (
            <li key={coin.id}>
              <span>{coin.name}</span>
              <span>Market Cap: ${coin.quotes.USD.market_cap.toLocaleString()}</span>
              <span>Price: ${coin.quotes.USD.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TopByCap;
