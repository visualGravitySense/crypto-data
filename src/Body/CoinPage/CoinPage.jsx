import React, { useState, useEffect } from "react";
import CoinPriceSection from "./CoinPriceSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoinMetrics from "./CoinMetrics";
import CoinChart from "./CoinChart";
import ChartPeriods from "./ChartPeriods";
import ChildModal from "./ChildModal";
import ChartModal from "../CoinPage/ChartModal";
import ListCoins from "../ListCoins";
import { getCoinById, getHistoricalData } from "../../services/api";
import { periods } from "./constant";
import moment from "moment";
import { useParams } from "react-router-dom";
import Converter from "./Converter";
// import ErrorModal from '../ErrorModal';
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage } from "../../services/store";
import { BodyContext } from "../../providers/BodyProvider";
import Button from "react-bootstrap/Button";
import styled from 'styled-components';

// Стилизованная кнопка
const StyledButton = styled.button`
  width: 50%;
  background-color: #ff0066;
  color: #fff;
  font-size: 0.9rem;
  font-family: 'Courier New', Courier, monospace;
  padding: 1rem 2rem;
  border: 3px solid #000;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 7px 7px 0 #000;

  &::before {
    content: '✨';
    position: absolute;
    top: -15px;
    left: -10px;
    font-size: 2rem;
  }

  &::after {
    content: '✨';
    position: absolute;
    bottom: -15px;
    right: -10px;
    font-size: 2rem;
  }

  &:hover {
    background-color: #C70039;
    transform: translate(-5px, -5px);
    box-shadow: 12px 12px 0 #000;
  }

  &:active {
    transform: translate(0, 0);
    box-shadow: 7px 7px 0 #000;
    background-color: #900C3F;
  }
`;

function CoinPage() {
  const dispatch = useDispatch();
  const [childModalShow, setChildModalShow] = React.useState(false);
  const [historicalData, setHistoricalData] = React.useState([]);
  const [selectedPeriod, setSelectedPeriod] = React.useState(periods[0]);

  const { coinId } = useParams();

  const selectedCurrency = useSelector((state) => state.selectedCurrency);

  const { setHistoryLog, setCompareList, compareList } = React.useContext(BodyContext);

  const [coinData, setCoinData] = React.useState({});

  const handleShow = () => setChildModalShow(true);
  const handleClose = () => setChildModalShow(false);
  const handleOnClick = () => setCompareList([...compareList, coinData]);

  React.useEffect(() => {
    getCoinById(coinId, selectedCurrency.name).then((data) => {
      setHistoryLog((prevState) => [
        ...prevState.filter((log) => log.id !== coinId),
        {
          id: coinId,
          name: data.name,
        },
      ]);
      setCoinData(data);
    });
  }, [selectedCurrency, coinId]);

  React.useEffect(() => {
    getHistoricalData({
      id: coinId,
      currency: selectedCurrency.name,
      start: selectedPeriod.start(),
      interval: selectedPeriod.interval,
    })
      .then((data) => {
        setHistoricalData(
          data?.map(({ timestamp, ...rest }) => ({
            ...rest,
            timestamp: moment(timestamp).format(selectedPeriod.format),
          }))
        );
      })
      .catch((error) =>
        dispatch(
          setErrorMessage(
            "Coin List is not available. Error: " + error.toString()
          )
        )
      );
  }, [selectedCurrency, selectedPeriod, coinId]);

  return (
    <>
      <Row>
        <Col md={4}>
        <br></br>
          <CoinMetrics {...coinData} currency={selectedCurrency} />


          

          <StyledButton className="w-100" onClick={handleOnClick}>Add to compare</StyledButton>
          <br></br>
          <br></br>

          

          
          <br></br>
        </Col>
        <Col md={8}>
        <br></br>
          {/* <CoinPriceSection /> */}
          {/* <ChartModal /> */}

          <ChartPeriods
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
          />
          
          

          <CoinChart data={historicalData} />
          

          <br></br>



          {/* <Button onClick={handleShow} variant="primary">
            Zoom Chart
          </Button> */}
        </Col>
      </Row>

      <ChildModal show={childModalShow} handleClose={handleClose}>
        <ChartPeriods
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
        />
        <CoinChart data={historicalData} />
      </ChildModal>
    </>
  );
}

export default CoinPage;
