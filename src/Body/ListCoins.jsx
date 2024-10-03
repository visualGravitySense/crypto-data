import React from "react";
import Table from "react-bootstrap/Table";
import { getCoinList } from "../services/api";
import Alert from "react-bootstrap/Alert";
import PriceNumber from "./PriceNumber";
import { useNavigate } from "react-router-dom";
// import ErrorModal from "./ErrorModal";
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage } from "../services/store";

function ListCoins() {
  const dispatch = useDispatch();  
  const [coinList, setCoinList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [errorMessage, setErrorMessage] = React.useState(null);

  const selectedCurrency = useSelector((state) => state.selectedCurrency);

  const navigate = useNavigate();

  // Получение списка монет
  React.useEffect(() => {
    setIsLoading(true);
    getCoinList(selectedCurrency.name)
      .then((data) => {
        setCoinList(data.slice(0, 10)); // Ограничение до 10 монет
      })
      .catch((error) =>
        dispatch(
          setErrorMessage(
            "Coin List is not available. Error: " + error.toString()
          )
        )
      )
      .finally(() => setIsLoading(false));
  }, [selectedCurrency]);

  // Показ индикатора загрузки
  if (isLoading)
    return (
      <Alert key={"primary"} variant={"primary"}>
        Loading...
      </Alert>
    );

  return (
    <>
      <div className="table-responsive">
        {" "}
        {/* Добавляем table-responsive для адаптивности */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th className="d-none d-md-table-cell">1h</th>
              {/* Скрываем на мобильных */}
              <th className="d-none d-md-table-cell">24h</th>
              {/* Скрываем на мобильных */}
              <th className="d-none d-lg-table-cell">7d</th>
              {/* Скрываем на малых и средних экранах */}
              <th>Volume(24h)</th>
              <th>MarketCap</th>
              <th className="d-none d-lg-table-cell">Max supply</th>
              {/* Скрываем на малых экранах */}
            </tr>
          </thead>
          <tbody>
            {coinList.map((coin) => (
              <tr key={coin.rank} onClick={() => navigate("/coin/" + coin.id)}>
                <td>{coin.rank}</td>
                <td>{coin.name}</td>
                <td>
                  <PriceNumber
                    value={coin.quotes[selectedCurrency.name]?.price}
                    symbol={selectedCurrency.symbol}
                  />
                </td>
                <td className="d-none d-md-table-cell">
                  {coin.quotes[selectedCurrency.name]?.percent_change_1h}
                </td>
                <td className="d-none d-md-table-cell">
                  {coin.quotes[selectedCurrency.name]?.percent_change_24h}
                </td>
                <td className="d-none d-lg-table-cell">
                  {coin.quotes[selectedCurrency.name]?.percent_change_7d}
                </td>
                <td>
                  <PriceNumber
                    value={coin.quotes[selectedCurrency.name]?.volume_24h}
                  />
                </td>
                <td>
                  <PriceNumber
                    value={coin.quotes[selectedCurrency.name]?.market_cap}
                    symbol={selectedCurrency.symbol}
                  />
                </td>
                <td className="d-none d-lg-table-cell">{coin.max_supply}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {/* <ErrorModal 
      errorMessage={errorMessage} 
      show={!!errorMessage} 
      handleClose={() => setErrorMessage(null)} 
      /> */}
    </>
  );
}

export default ListCoins;
