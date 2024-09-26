import React from "react";
import Table from "react-bootstrap/Table";
import { getCoinList } from "../services/api";
import Alert from "react-bootstrap/Alert";
import PriceNumber from "./PriceNumber";
import { currencies } from '../constants';

function ListCoins({ selectedCurrency }) {
  const [coinList, setCoinList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const symbol = Object.entries(currencies).find(
    ([sym, currency]) => currency === selectedCurrency
  )?.[0];

  React.useEffect(() => {
    setIsLoading(true);
    getCoinList(selectedCurrency).then((data) => {
      setCoinList(data.slice(0, 10));
      setIsLoading(false);
    });
  }, [selectedCurrency]);
  if (isLoading)
    return (
      <Alert key={"primary"} variant={"primary"}>
        Loading
      </Alert>
    );

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
          <th>MarketCap</th>
          <th>Max supply</th>
        </tr>
      </thead>
      <tbody>
        {coinList.map((coin) => (
          <tr key={coin.rank}>
            <td>{coin.rank}</td>
            <td>{coin.name}</td>
            <td>
              <PriceNumber value={coin.quotes[selectedCurrency]?.price} symbol={symbol} fixedDecimalScale={true} />
            </td>
            <td><PriceNumber value={coin.quotes[selectedCurrency]?.percent_change_1h} suffix=" %" fixedDecimalScale={true} /></td>
            <td><PriceNumber value={coin.quotes[selectedCurrency]?.percent_change_24h} suffix=" %" fixedDecimalScale={true} /></td>
            <td><PriceNumber value={coin.quotes[selectedCurrency]?.percent_change_7d} suffix=" %" fixedDecimalScale={true} /></td>
            <td>
              <PriceNumber value={coin.quotes[selectedCurrency]?.volume_24h} symbol={symbol} fixedDecimalScale={true} />
            </td>
            <td>
              <PriceNumber value={coin.quotes[selectedCurrency]?.market_cap} symbol={symbol} fixedDecimalScale={true} />
            </td>
            <td>{coin.max_supply}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListCoins;