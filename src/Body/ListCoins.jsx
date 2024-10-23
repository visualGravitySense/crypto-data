import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { getCoinList } from "../services/api";
import Alert from "react-bootstrap/Alert";
import PriceNumber from "./PriceNumber";
import { useNavigate } from "react-router-dom";
// import ErrorModal from "./ErrorModal";
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage } from "../services/store";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AboutSection from "./AboutSection";
import Converter from "./CoinPage/Converter";





function ListCoins() {
  const dispatch = useDispatch();  
  const [coinList, setCoinList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: 'rank', direction: 'asc' }); // Состояние сортировки

  const selectedCurrency = useSelector((state) => state.selectedCurrency);
  const navigate = useNavigate();

  // Получение списка монет
  useEffect(() => {
    setIsLoading(true);
    getCoinList(selectedCurrency.name)
      .then((data) => {
        setCoinList(data.slice(0, 100)); // Ограничение до 100 монет
      })
      .catch((error) =>
        dispatch(
          setErrorMessage(
            "Coin List is not available. Error: " + error.toString()
          )
        )
      )
      .finally(() => setIsLoading(false));
  }, [selectedCurrency, dispatch]);

  // Функция для изменения направления сортировки
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Функция сортировки
  const sortedCoins = [...coinList].sort((a, b) => {
    let aValue = a[sortConfig.key];
    let bValue = b[sortConfig.key];

    if (sortConfig.key.includes('quotes')) {
      aValue = a.quotes[selectedCurrency.name][sortConfig.key.split('.')[1]];
      bValue = b.quotes[selectedCurrency.name][sortConfig.key.split('.')[1]];
    }

    if (aValue === undefined || aValue === null) aValue = 0;
    if (bValue === undefined || bValue === null) bValue = 0;

    if (typeof aValue === 'string') aValue = aValue.toLowerCase();
    if (typeof bValue === 'string') bValue = bValue.toLowerCase();

    if (sortConfig.direction === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  // Показ индикатора загрузки
  if (isLoading)
    return (
      <Alert key={"primary"} variant={"primary"}>
        Loading...
      </Alert>
    );

    
  return (
    <>
      <Row>
        <Col md={4}>
          <AboutSection />
          
           {/* <TopPerformers /> */}
        </Col>

        <Col md={8}>
          <Converter />
          {/* Контейнер для таблицы с вертикальным скроллом */}
          <div style={{ maxHeight: "500px", overflowY: "auto", position: "relative" }}>
            {/* Горизонтальная прокрутка, закрепленная внизу */}
            <div
              className="table-wrapper"
              style={{ overflowX: "auto", position: "sticky", bottom: 0 }}
            >
              <Table striped bordered hover className="crypto-table">
                <thead>
                  <tr>
                    <th onClick={() => handleSort('rank')}>
                      #
                      {sortConfig.key === 'rank' ? (sortConfig.direction === 'asc' ? ' ▲' : ' ▼') : ''}
                    </th>
                    <th onClick={() => handleSort('name')}>
                      Name
                      {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? ' ▲' : ' ▼') : ''}
                    </th>
                    <th onClick={() => handleSort('quotes.price')}>
                      Price
                      {sortConfig.key === 'quotes.price' ? (sortConfig.direction === 'asc' ? ' ▲' : ' ▼') : ''}
                    </th>
                    <th className="d-none d-md-table-cell" onClick={() => handleSort('quotes.percent_change_1h')}>
                      1h
                      {sortConfig.key === 'quotes.percent_change_1h' ? (sortConfig.direction === 'asc' ? ' ▲' : ' ▼') : ''}
                    </th>
                    <th className="d-none d-md-table-cell" onClick={() => handleSort('quotes.percent_change_24h')}>
                      24h
                      {sortConfig.key === 'quotes.percent_change_24h' ? (sortConfig.direction === 'asc' ? ' ▲' : ' ▼') : ''}
                    </th>
                    <th className="d-none d-lg-table-cell" onClick={() => handleSort('quotes.percent_change_7d')}>
                      7d
                      {sortConfig.key === 'quotes.percent_change_7d' ? (sortConfig.direction === 'asc' ? ' ▲' : ' ▼') : ''}
                    </th>
                    <th onClick={() => handleSort('quotes.volume_24h')}>
                      Volume(24h)
                      {sortConfig.key === 'quotes.volume_24h' ? (sortConfig.direction === 'asc' ? ' ▲' : ' ▼') : ''}
                    </th>
                    <th onClick={() => handleSort('quotes.market_cap')}>
                      MarketCap
                      {sortConfig.key === 'quotes.market_cap' ? (sortConfig.direction === 'asc' ? ' ▲' : ' ▼') : ''}
                    </th>
                    <th className="d-none d-lg-table-cell" onClick={() => handleSort('max_supply')}>
                      Max supply
                      {sortConfig.key === 'max_supply' ? (sortConfig.direction === 'asc' ? ' ▲' : ' ▼') : ''}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedCoins.map((coin) => (
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
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ListCoins;
