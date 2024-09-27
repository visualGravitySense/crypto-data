import React from 'react';
import Table from 'react-bootstrap/Table';
import './SearchResult.css';
import { useParams } from "react-router-dom"
import { getSearch } from "../services/api";

function SearchResult() {
  const { q } = useParams();
  const [result, setResult] = React.useState({});

  React.useEffect(() => {
    getSearch(q).then(setResult);
  }, [q]);

  
  

  return (
    <div className="mt-5 search-result-container">
        <h3>Search Result {q} </h3>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Raiting</th>
            <th>Badge</th>
            <th>Name</th>
            </tr>
        </thead>
        <tbody>
          {result.currencies?.map(currency => (
            <tr key={currency.id}>
              <td>{currency.rank}</td>
              <td>{currency.name}</td>
              <td>{currency.symbol}</td>

            </tr>
          ))}
          
            
        </tbody>
        </Table>

    </div>
    
  );
}

export default SearchResult;