import React from "react";
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
import { getBitcoin } from "../../services/api";


function CoinPage({ selectedCurrency }) {
  const [childModalShow, setChildModalShow] = React.useState(false);
  const [coinData, setCoinData] = React.useState(null);
  const handleShow = () => setChildModalShow(true);
  const handleClose = () => setChildModalShow(false);

  React.useEffect(() => {
    getBitcoin('btc-bitcoin', selectedCurrency).then(setCoinData);
    }, [selectedCurrency]);
  
// Test
  return (
    <>
     
      <Row>
        <Col md={4}>
          <CoinMetrics coinData={coinData} selectedCurrency={selectedCurrency} />
          
        </Col>
        <Col md={8}>  
          {/* <ListCoins /> */}
          
            
            <CoinPriceSection selectedCurrency={selectedCurrency} />

            <ChartModal />
            {/* <ChartPeriods /> */}
            <CoinChart />
        
          
          
          {/* <Button onClick={handleShow} variant="primary">
            Zoom Chart
          </Button> */}
        </Col>
      </Row>            
      
      <ChildModal show={childModalShow} handleClose={handleClose}>
        
        <ChartPeriods />
        <CoinChart />
        
      </ChildModal>
    </>
  );
}

export default CoinPage;
