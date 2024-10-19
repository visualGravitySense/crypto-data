import React from "react";
import Table from "react-bootstrap/Table";
import { BodyContext } from "../providers/BodyProvider";

import './ExchangeList.scss';  // Подключаем SCSS файл


function ExchangeList() {
  const { exchangeList } = React.useContext(BodyContext);

  if (!exchangeList || exchangeList.length === 0) {
      return <p>Loading exchanges...</p>;
  }

  return (
      <Table striped bordered hover responsive>
          <thead>
              <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Website</th>
                  <th>Currencies</th>
                  <th>Markets</th>
              </tr>
          </thead>
          <tbody>
              {exchangeList.slice(0, 50).map((exchange) => {
                  // Safely extract properties with default values
                  const rank = exchange.adjusted_rank ?? 'N/A';
                  const name = exchange.name ?? 'N/A';
                  const currencies = exchange.currencies ?? 'N/A';
                  const markets = exchange.markets ?? 'N/A';

                  // Safely access the website links
                  const websiteLinks = exchange.links?.website ?? [];

                  return (
                      <tr key={exchange.id}>
                          <td>{rank}</td>
                          <td>{name}</td>
                          <td>
                              {websiteLinks.length > 0 ? (
                                  <a href={websiteLinks[0]} target="_blank" rel="noopener noreferrer">
                                      {websiteLinks[0]}
                                  </a>
                              ) : (
                                  'N/A'
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
