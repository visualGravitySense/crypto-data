import Table from "react-bootstrap/Table";

function CoinPriceChange() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>1h</th>
          <th>24h</th>
          <th>Week</th>
          <th>Month</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody></tbody>
    </Table>
  );
}

export default CoinPriceChange;
