import React from "react";
import Table from "react-bootstrap/Table";
import { BodyContext } from "../providers/BodyProvider";

import './ExchangeList.scss';  // Подключаем SCSS файл


function ExchangeList() {
  console.log(ExchangeList);

  const { exchangeList } = React.useContext(BodyContext);
  return (
    <Table className="table-compare">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rank</th>
          <th>Reported Volume 24h Share (%)</th>
          <th>Number of Markets</th>
          <th>Country</th>
          <th>Trust Score</th>
          <th>Year Established</th>
          <th>Trading Incentives</th>
        </tr>
      </thead>
      <tbody>
        {exchangeList.slice(0, 100).map((exchange) => (
          <tr key={exchange.id}>
            <td>{exchange.name}</td>
            <td>{exchange.adjusted_rank}</td>
            <td>{exchange.reported_volume_24h_share}%</td>
            <td>{exchange.market_count}</td>
            <td>{exchange.country || 'N/A'}</td>
            <td>{exchange.trust_score || 'N/A'}</td>
            <td>{exchange.year_established || 'N/A'}</td>
            <td>{exchange.has_trading_incentive ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ExchangeList;
