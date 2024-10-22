import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const HistoricalChart = ({ coinId }) => {
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical?start=2023-01-01&end=2023-10-01`)
      .then(response => response.json())
      .then(data => {
        setHistoricalData(data.map(item => ({ date: item.time_open, price: item.close })));
      });
  }, [coinId]);

  const chartData = {
    labels: historicalData.map(item => new Date(item.date).toLocaleDateString()),
    datasets: [{
      label: 'Price (USD)',
      data: historicalData.map(item => item.price),
      fill: false,
      borderColor: 'rgba(75,192,192,1)',
      tension: 0.1
    }]
  };

  return (
    <div className="historical-chart">
      <h3>Historical Price Chart</h3>
      <Line data={chartData} />
    </div>
  );
};

export default HistoricalChart;
