import React from "react";
import Table from "react-bootstrap/Table";
import { getCoinList } from "../services/api";

function ListCoins() {
  const [coinList, setCoinList] = React.useState([]);

  React.useEffect(() => {
    getCoinList().then((data) => {
      setCoinList(data.slice(0, 10));
    });
  }, []);

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
      <tbody>
        {coinList.map(coin => (
          <tr key={coin.rank}>
            <td>{coin.rank}</td>
            <td>{coin.name}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListCoins;