import { useEffect, useState } from "react";
// import './TopPerformers.scss';
import '../PriceAlerts/TrendingCoins.scss';


const TopExchangesAll = () => {
    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/exchanges")
        .then((response) => response.json())
        .then((data) => {
          setExchanges(data.slice(0, 15)); // Limiting to top 5 exchanges
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching exchanges data:", error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p>Loading top exchanges...</p>;
    }
  
    return (
      <div className="top-exchanges anti-design">
        <h3>Top Cryptocurrency Exchanges</h3>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {exchanges.map((exchange) => (
            <li key={exchange.id}>
              {exchange.name}: 
              {exchange.adjusted_volume_24h 
                ? `${exchange.adjusted_volume_24h.toFixed(2)} USD (24h volume)` 
                : "Data not available"}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default TopExchangesAll;
