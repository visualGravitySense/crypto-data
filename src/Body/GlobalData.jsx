import React from "react";
import Table from "react-bootstrap/Table";
import { getGlobalData } from "../services/api";

function GlobalData() {
  const [globalData, setGlobalData] = React.useState({});

  React.useEffect(() => {
    getGlobalData().then(setGlobalData);
  }, []);

  return (
    <Table>
      <tbody>
        <tr>
          <td>BTC Dominance</td>
          <td>{globalData.bitcoin_dominance_percentage} %</td>
        </tr>
        <tr>
          <td>Vol 24h</td>
          <td>{globalData.volume_24h_usd}</td>
        </tr>
        <tr>
          <td>Market Cap</td>
          <td>{globalData.market_cap_usd}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default GlobalData;