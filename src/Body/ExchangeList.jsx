import React from "react";
import Table from "react-bootstrap/Table";
import { BodyContext } from "../providers/BodyProvider";

function ExchangeList() {
  console.log(ExchangeList);

  const { exchangeList } = React.useContext(BodyContext);
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {exchangeList.slice(0, 100).map((exchange) => (
              <tr key={exchange.id}>
                <td>{exchange.name}</td>
              </tr>
            ))}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ExchangeList;
