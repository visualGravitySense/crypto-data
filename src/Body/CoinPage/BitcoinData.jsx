import React, { useState, useEffect } from 'react';
import { getBitcoin } from "../../services/api";

function BitcoinData() {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBitcoin(); 
        setBitcoinData(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Bitcoin data:', err);
        setError('Failed to load data');
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Bitcoin Information</h1>
      {bitcoinData && (
        <div>
          <p><strong>Symbol:</strong> {bitcoinData.symbol}</p>
          <p><strong>Name:</strong> {bitcoinData.name}</p>
          <p><strong>Rank:</strong> {bitcoinData.rank}</p>
          <p><strong>Type:</strong> {bitcoinData.type}</p>
          <p><strong>Description:</strong> {bitcoinData.description ? bitcoinData.description : 'No description available'}</p>
        </div>
      )}
    </div>
  );
}

export default BitcoinData;
