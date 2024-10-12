import React from 'react';
import styled from 'styled-components';

// Styled Components
const TableContainer = styled.div`
  background-color: #f0f0f0;
  padding: 2rem;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
`;

const StyledTable = styled.table`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-collapse: collapse;
  box-shadow: 10px 10px 0 #000;
  border: 5px solid #000;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 100%;
    height: 100%;
    background-color: #333;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    background-color: #ffcc00;
    z-index: -2;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  font-size: 1.2rem;
  text-align: left;
  transition: background-color 0.3s ease;
`;

const LabelCell = styled(TableCell)`
  background-color: #333;
  color: #fff;
  font-weight: bold;
  border-right: 3px solid #000;
`;

const ValueCell = styled(TableCell)`
  background-color: #fff;
  color: #000;
  border-left: 3px solid #000;
  text-align: right;
  box-shadow: 5px 5px 0 #000;
  position: relative;

  &:hover {
    background-color: #ddd;
    transform: scale(1.05);
  }
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #333;
    color: #fff;
  }

  &:nth-child(even) {
    background-color: #555;
    color: #fff;
  }

  &:hover {
    background-color: #ff5733;
    color: #fff;
  }
`;

// import Table from "react-bootstrap/Table";
// import ErrorModal from "./ErrorModal";

// import './CryptoTable.scss';

const CoinMetrics = ({ quotes, currency, total_supply }) => {
  
  return (
    <>
    <TableContainer>
      <StyledTable>
        <tbody>
          <TableRow>
            <LabelCell>Market Cap</LabelCell>
            <ValueCell>{quotes?.[currency.name]?.market_cap}</ValueCell>
          </TableRow>
          <TableRow>
            <LabelCell>All Time High</LabelCell>
            <ValueCell>{quotes?.[currency.name]?.ath_price}</ValueCell>
          </TableRow>
          <TableRow>
            <LabelCell>Volume (24h)</LabelCell>
            <ValueCell>{quotes?.[currency.name]?.volume_24h}</ValueCell>
          </TableRow>
          <TableRow>
            <LabelCell>Vol Change (24h)</LabelCell>
            <ValueCell>{quotes?.[currency.name]?.volume_24h_change_24h}</ValueCell>
          </TableRow>
          <TableRow>
            <LabelCell>Max Supply</LabelCell>
            <ValueCell>{total_supply}</ValueCell>
          </TableRow>
        </tbody>
      </StyledTable>
    </TableContainer>
      {/* <ErrorModal 
      errorMessage={errorMessage} 
      show={!!errorMessage} 
      handleClose={() => setErrorMessage(null)} 
      /> */}
    </>
  );
}

export default CoinMetrics;