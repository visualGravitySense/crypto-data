import React, { useState, useEffect } from 'react';

const CoinComparison = () => {
  const [coin1, setCoin1] = useState('');
  const [coin2, setCoin2] = useState('');
  const [coinData1, setCoinData1] = useState(null);
  const [coinData2, setCoinData2] = useState(null);

  const handleCompare = () => {
    Promise.all([
      fetch(`https://api.coinpaprika.com/v1/tickers/${coin1}`).then(res => res.json()),
      fetch(`https://api.coinpaprika.com/v1/tickers/${coin2}`).then(res => res.json())
    ]).then(([data1, data2]) => {
      setCoinData1(data1);
      setCoinData2(data2);
    });
  };

  return (
    <div className="coin-comparison">
      <h3>Compare Coins</h3>
      <input type="text" placeholder="First coin (e.g. BTC)" value={coin1} onChange={(e) => setCoin1(e.target.value)} />
      <input type="text" placeholder="Second coin (e.g. ETH)" value={coin2} onChange={(e) => setCoin2(e.target.value)} />
      <button onClick={handleCompare}>Compare</button>

      {coinData1 && coinData2 && (
        <div className="comparison-result">
          <h4>{coinData1.name} vs {coinData2.name}</h4>
          <p>Price: ${coinData1.quotes.USD.price} vs ${coinData2.quotes.USD.price}</p>
          <p>Market Cap: ${coinData1.quotes.USD.market_cap} vs ${coinData2.quotes.USD.market_cap}</p>
          <p>Volume 24h: ${coinData1.quotes.USD.volume_24h} vs ${coinData2.quotes.USD.volume_24h}</p>
        </div>
      )}
    </div>
  );
};

export default CoinComparison;
 