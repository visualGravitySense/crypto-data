import Table from "react-bootstrap/Table";

function ListCoins() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>1h</th>
          <th>24h</th>
          <th>7d</th>
          <th>Volume(24h)</th>
          <th>Liquidity</th>
          <th>MarketCap</th>
        </tr>
      </thead>
      <tbody></tbody>
    </Table>
  );
}

export default ListCoins;
