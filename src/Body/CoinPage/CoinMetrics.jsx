import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from 'react';
// import { getBitcoin } from "../../services/api";
import PriceNumber from '../PriceNumber';
import { currencies } from '../../constants';

function CoinMetrics({ coinData, selectedCurrency }) {
  // const [bitcoinData, setBitcoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {name, symbol, quotes } = coinData;

  const currencyQuote = quotes && quotes[selectedCurrency];
    const marketCap = currencyQuote?.market_cap;
    const volume24h = currencyQuote?.volume_24h;
    const athPrice = currencyQuote?.ath_price;
    const percentChange30d = currencyQuote?.percent_change_30d;
    const volToMarketCap =
        volume24h && marketCap && marketCap !== 0
            ? (volume24h / marketCap).toFixed(2)
            : 'N/A';

    const symbolEntry = Object.entries(currencies).find(
        ([sym, currency]) => currency === selectedCurrency
    );
    const currencySymbol = symbolEntry ? symbolEntry[0] : '';

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getBitcoin(); 
  //       setBitcoinData(data);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error('Error fetching Bitcoin data:', err);
  //       setError('Failed to load data');
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []); 

  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <h3>{name} ({symbol}) Metrics</h3>
      {/* {bitcoinData && ( */}
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Market Cap</td>
              <td>
                  {typeof marketCap === 'number'
                      ? <PriceNumber value={marketCap} symbol={currencySymbol} decimalScale={2} />
                      : 'N/A'}
              </td>
            </tr>

            <tr>
                <td>All Time High</td>
                <td>
                    {typeof athPrice === 'number'
                        ? <PriceNumber value={athPrice} symbol={currencySymbol} decimalScale={2} />
                        : 'N/A'}
                </td>
            </tr>

            <tr>
                <td>Volume (24H)</td>
                <td>
                    {typeof volume24h === 'number'
                        ? <PriceNumber value={volume24h} symbol={currencySymbol} decimalScale={2} />
                        : 'N/A'}
                </td>
            </tr>

            <tr>
                <td>Vol / M Cap (24h)</td>
                <td>{volToMarketCap}</td>
              </tr>
              <tr>
              <td>Percent Change (30d)</td>
                <td>
                    {typeof percentChange30d === 'number'
                        ? <PriceNumber value={percentChange30d} suffix=" %" decimalScale={2} />
                        : 'N/A'}
                </td>
              </tr>

            {/* <tr>
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
            </tr> */}
          </tbody>
        </Table>
      {/* )} */}
    </>
  );
}

export default CoinMetrics;
