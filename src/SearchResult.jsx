import Table from 'react-bootstrap/Table';
import './SearchResult.css';

function SearchResult() {
  return (
    <div className="mt-5 search-result-container">
        <h3>Search Result</h3>
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
            
        </tbody>
        </Table>

    </div>
    
  );
}

export default SearchResult;