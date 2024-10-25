import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const HistoricalChart = ({ coinId }) => {
  const [historicalData, setHistoricalData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical?start=2023-01-01&end=2023-10-01`, {
      signal: abortController.signal,
    })
      .then(response => response.json())
      .then(data => {
        setHistoricalData(data.map(item => ({
          date: new Date(item.time_open),
          price: item.close,
        })));
        setLoading(false);
      })
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Error fetching historical data:', error);
        }
      });

    return () => abortController.abort();
  }, [coinId]);

  const chartData = {
    labels: historicalData.map(item => item.date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })),
    datasets: [
      {
        label: 'Price (USD)',
        data: historicalData.map(item => item.price),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="historical-chart">
      <h3>Historical Price Chart</h3>
      {loading ? <p>Loading data...</p> : <Line data={chartData} />}
    </div>
  );
};

export default HistoricalChart;
