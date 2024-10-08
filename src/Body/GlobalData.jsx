import React from "react";
import Table from "react-bootstrap/Table";
import { getGlobalData } from "../services/api";
import ErrorModal from "./ErrorModal";
import { BodyContext } from "../providers/BodyProvider";

function GlobalData() {
  const [globalData, setGlobalData] = React.useState({});
  const [errorMessage, setErrorMessage] = React.useState(null);

  const { exchangeList } = React.useContext(BodyContext);

  React.useEffect(() => {
    getGlobalData()
      .then(setGlobalData)
      .catch((error) =>
        setErrorMessage(
          "Coin List is not available. Error: " + error.toString()
        )
      )
      // .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
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
          <tr>
            <td>EXCHANGES COUNT</td>
            <td>{exchangeList.length}</td>
          </tr>
        </tbody>
      </Table>
      <ErrorModal
        errorMessage={errorMessage}
        show={!!errorMessage}
        handleClose={() => setErrorMessage(null)}
      />
    </>
  );
}

export default GlobalData;
