import { Line } from 'react-chartjs-2';

const MarketCapChart = ({ marketCapData }) => {
    const chartData = {
        labels: marketCapData.map(data => new Date(data.timestamp).toLocaleDateString()), 
        datasets: [
            {
                label: 'Market Cap (USD)',
                data: marketCapData.map(data => data.market_cap), 
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.1,
            }
        ]
    };

    return <Line data={chartData} />;
};

export default MarketCapChart;
