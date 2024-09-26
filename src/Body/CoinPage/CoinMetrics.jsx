import Table from "react-bootstrap/Table";

function CoinMetrics({ name, symbol }) {
  return (
    <>
      <h3>{name} ({symbol}) Metrics</h3>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Market Cap</td>
            <td></td>
          </tr>
          <tr>
            <td>All Time High</td>
            <td></td>
          </tr>
          <tr>
            <td>Volume (24h)</td>
            <td></td>
          </tr>
          <tr>
            <td>Vol / M Cap (24h)</td>
            <td></td>
          </tr>
          <tr>
            <td>Circulating Supply</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default CoinMetrics;