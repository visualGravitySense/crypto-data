import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { BodyContext } from "../providers/BodyProvider";

import "./ExchangeList.scss"; // Подключаем SCSS файл

function ExchangeList() {
  const { exchangeList } = React.useContext(BodyContext);

  if (!exchangeList || exchangeList.length === 0) {
    return <p>Loading exchanges...</p>;
  }

  // Состояние для сортировки
  const [sortConfig, setSortConfig] = useState({
    key: "adjusted_rank",
    direction: "asc",
  });

  // Функция для изменения сортировки
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Функция сортировки списка
  const sortedList = [...exchangeList].sort((a, b) => {
    let aValue = a[sortConfig.key];
    let bValue = b[sortConfig.key];

    // Преобразование данных для правильной сортировки
    if (aValue === undefined || aValue === null) aValue = "N/A";
    if (bValue === undefined || bValue === null) bValue = "N/A";

    // Если данные строки, сортируем с учетом регистра
    if (typeof aValue === "string" && typeof bValue === "string") {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    // Сравнение значений для сортировки
    if (sortConfig.direction === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th onClick={() => handleSort("adjusted_rank")}>
            Rank{" "}
            {sortConfig.key === "adjusted_rank"
              ? sortConfig.direction === "asc"
                ? "▲"
                : "▼"
              : ""}
          </th>
          <th onClick={() => handleSort("name")}>
            Name{" "}
            {sortConfig.key === "name"
              ? sortConfig.direction === "asc"
                ? "▲"
                : "▼"
              : ""}
          </th>
          <th onClick={() => handleSort("website")}>Website</th>
          <th onClick={() => handleSort("currencies")}>
            Currencies{" "}
            {sortConfig.key === "currencies"
              ? sortConfig.direction === "asc"
                ? "▲"
                : "▼"
              : ""}
          </th>
          <th onClick={() => handleSort("markets")}>
            Markets{" "}
            {sortConfig.key === "markets"
              ? sortConfig.direction === "asc"
                ? "▲"
                : "▼"
              : ""}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedList.slice(0, 50).map((exchange) => {
          // Safely extract properties with default values
          const rank = exchange.adjusted_rank ?? "N/A";
          const name = exchange.name ?? "N/A";
          const currencies = exchange.currencies ?? "N/A";
          const markets = exchange.markets ?? "N/A";

          // Safely access the website links
          const websiteLinks = exchange.links?.website ?? [];

          return (
            <tr key={exchange.id}>
              <td>{rank}</td>
              <td>{name}</td>
              <td>
                {websiteLinks.length > 0 ? (
                  <a
                    href={websiteLinks[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {websiteLinks[0]}
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
              <td>{currencies}</td>
              <td>{markets}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ExchangeList;
