import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from 'react';
import { getBitcoin } from "../../services/api";

function CoinMetrics({ name, symbol, quotes, currency }) {
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
              <td>Market Cap</td>
              <td>{quotes?.[currency.name]?.market_cap}</td>
            </tr>
            <tr>
              <td>All time hight</td>
              <td>{quotes?.[currency.name]?.ath_price}</td>
            </tr>
            <tr>
              <td>Volume 24h</td>
              <td>{quotes?.[currency.name]?.volume_24h}</td>
            </tr>
            <tr>
              <td>Vol Change 24h</td>
              <td>{quotes?.[currency.name]?.volume_24h_change_24h }</td>
            </tr>
            <tr>
              <td>Max Supply</td>
              <td>{total_suppy}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  );
}

export default CoinMetrics;
