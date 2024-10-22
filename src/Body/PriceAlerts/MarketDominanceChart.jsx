import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const MarketDominanceChart = () => {
  const [dominanceData, setDominanceData] = useState({});

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/global')
      .then(response => response.json())
      .then(data => {
        setDominanceData({
          labels: ['Bitcoin', 'Ethereum', 'Others'],
          datasets: [{
            label: 'Market Dominance',
            data: [data.bitcoin_dominance_percentage, data.ethereum_dominance_percentage, 100 - (data.bitcoin_dominance_percentage + data.ethereum_dominance_percentage)],
            backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384']
          }]
        });
      });
  }, []);

  return (
    <div className="market-dominance">
      <h3>Market Dominance</h3>
      <Pie data={dominanceData} />
    </div>
  );
};

export default MarketDominanceChart;
