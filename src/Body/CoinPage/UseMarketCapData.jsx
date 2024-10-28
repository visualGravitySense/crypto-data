import { useEffect, useState } from 'react';

const useMarketCapData = (coinId) => {
    const [marketCapData, setMarketCapData] = useState([]);

    useEffect(() => {
        const fetchMarketCapData = async () => {
            try {
                const response = await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}/historical?start=7-days-ago&interval=24h`);
                const data = await response.json();
                setMarketCapData(data);
            } catch (error) {
                console.error('Error fetching market cap data:', error);
            }
        };
        
        fetchMarketCapData();
    }, [coinId]);

    return marketCapData;
};

export default useMarketCapData;