import React, { useState, useEffect } from 'react';

import './PriceAlerts.scss';
import '../CoinPage/CryptoTable.scss';

const PriceAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [coin, setCoin] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [currentPrice, setCurrentPrice] = useState(null);

  const handleAddAlert = () => {
    setAlerts([...alerts, { coin, targetPrice }]);
    setCoin('');
    setTargetPrice('');
  };

  useEffect(() => {
    if (alerts.length > 0) {
      alerts.forEach(alert => {
        fetch(`https://api.coinpaprika.com/v1/tickers/${alert.coin}`)
          .then(response => response.json())
          .then(data => {
            setCurrentPrice(data.quotes.USD.price);
            if (data.quotes.USD.price >= alert.targetPrice) {
              alert(`Price Alert! ${alert.coin} has reached $${alert.targetPrice}`);
            }
          });
      });
    }
  }, [alerts]);

  return (
    <div className="price-alerts anti-design top-cryptos-volume">
    <h3 className="anti-title">Set Price Alerts</h3>
    <div className="input-group">
      <input
        type="text"
        value={coin}
        onChange={(e) => setCoin(e.target.value)}
        placeholder="Enter coin symbol (e.g. BTC)"
      />
      <input
        type="number"
        value={targetPrice}
        onChange={(e) => setTargetPrice(e.target.value)}
        placeholder="Enter target price"
      />
    </div>
    <button className="add-alert-button" onClick={handleAddAlert}>Add Alert</button>
    
    <h4 className="active-alerts-title">Active Alerts:</h4>
    <ul className="alerts-list">
      {alerts.map((alert, index) => (
        <li className="alert-item" key={index}>
          <span>{alert.coin}</span>: Target Price <span>${alert.targetPrice}</span>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default PriceAlerts;
