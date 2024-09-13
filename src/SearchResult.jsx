import Table from 'react-bootstrap/Table';

function SearchResult() {
  return (
    <div>
        <h3>Search Result</h3>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
        </Table>

    </div>
    
  );
}

export default SearchResult;