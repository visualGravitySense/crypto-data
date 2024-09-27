// import React from "react";
import React, { useState, useEffect } from 'react';
import CoinPriceSection from "./CoinPriceSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoinMetrics from "./CoinMetrics";
import CoinChart from "./CoinChart";
import ChartPeriods from "./ChartPeriods";
// import Button from 'react-bootstrap/Button'
import ChildModal from './ChildModal'
import ChartModal from '../CoinPage/ChartModal';
import ListCoins from '../ListCoins';
import { getCoinById, getHistoricalData } from "../../services/api";
import { periods } from './constant';
import moment from 'moment';


function CoinPage({ selectedCurrency }) {
  const [childModalShow, setChildModalShow] = React.useState(false);
  const [historicalData, setHistoricalData] = React.useState([]);
  const [selectedPeriod, setSelectedPeriod] = React.useState(periods[0]);

React.useState(false);
  const [coinData, setCoinData] = React.useState({});

  const handleShow = () => setChildModalShow(true);
  const handleClose = () => setChildModalShow(false);

  React.useEffect(() => {
    getCoinById("btc-bitcoin", selectedCurrency.name).then(setCoinData);
  }, [selectedCurrency]);

  React.useEffect(() => {
    // getCoinById("btc-bitcoin", selectedCurrency.name).then(setCoinData);
    getHistoricalData({
      id: 'btc-bitcoin',
      currency: selectedCurrency.name,
      start: selectedPeriod.start(),
      interval: selectedPeriod.interval,
    }).then(data => 
      setHistoricalData(
        data?.map(({ timestamp, ...rest }) => ({
          ...rest,
          timestamp: moment(timestamp).format(selectedPeriod.format),
        })
        
      )
    )
  );
  }, [selectedCurrency, selectedPeriod]);

  // console.log(historiacalData);
  
  
// Test
  return (
    <>
     
      <Row>
        <Col md={4}>
         <CoinMetrics {...coinData} currency={selectedCurrency} />
          
        </Col>
        <Col md={8}>  
          {/* <ListCoins /> */}
          
            
            <CoinPriceSection />

            <ChartModal />
            <ChartPeriods
                selectedPeriod={selectedPeriod}
                setSelectedPeriod={setSelectedPeriod}
              />
            <CoinChart data={historicalData}/>
        
          
          
          {/* <Button onClick={handleShow} variant="primary">
            Zoom Chart
          </Button> */}
        </Col>
      </Row>            
      
      <ChildModal show={childModalShow} handleClose={handleClose}>
        
        <ChartPeriods selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod}  />
        <CoinChart data={historicalData}/>
        
      </ChildModal>
    </>
  );
}

export default CoinPage;
