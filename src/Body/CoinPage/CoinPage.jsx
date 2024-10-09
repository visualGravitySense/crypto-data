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
          <CoinMetrics {...coinData} currency={selectedCurrency} />

          <Button className="w-100" onClick={handleOnClick}>Add to compare</Button>
        </Col>
        <Col md={8}>
          <CoinPriceSection />

          <ChartModal />
          <ChartPeriods
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
          />

          <CoinChart data={historicalData} />

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
