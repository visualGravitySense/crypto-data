import React from 'react';
import { Table } from 'react-bootstrap';
import './SearchResults.css'; 

const SearchResults = () => {
    
    const results = [
      { symbol: 'BTC', title: 'Bitcoin', rank: 1 },
      { symbol: 'ETH', title: 'Ethereum', rank: 2 },
      { symbol: 'BNB', title: 'Binance Coin', rank: 3 }
    ];
  
    return (
      <div className="container mt-4">
        <h1>Search Results</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="symbol-col">Rank</th>
              <th className="rank-col">Symbol</th>
              <th className="title-col">Name</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.rank}</td>
                <td>{result.symbol}</td>
                <td>{result.title}</td>
                
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

export default SearchResults;
