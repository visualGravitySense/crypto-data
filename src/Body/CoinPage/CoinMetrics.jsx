import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from 'react';
import { getBitcoin } from "../../services/api";

function CoinMetrics() {
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
    <>
      <h3>Bitcoin (BTC) Information</h3>
      {bitcoinData && (
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Symbol</td>
              <td>{bitcoinData.symbol}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{bitcoinData.name}</td>
            </tr>
            <tr>
              <td>Rank</td>
              <td>{bitcoinData.rank}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{bitcoinData.type}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{bitcoinData.description ? bitcoinData.description : 'No description available'}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  );
}

export default CoinMetrics;
