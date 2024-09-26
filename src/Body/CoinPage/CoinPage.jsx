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


function CoinPage() {
  const [childModalShow, setChildModalShow] = React.useState(false);

  const handleShow = () => setChildModalShow(true);
  const handleClose = () => setChildModalShow(false);

  React.useEffect(() => {
    getCoinById("btc-bitcoin", selectedCurrency).then(setCoinData);
  }, [selectedCurrency])
  
// Test
  return (
    <>
     
      <Row>
        <Col md={4}>
          <CoinMetrics {...CoinData} currency={selectedCurrency} />
          
        </Col>
        <Col md={8}>  
          {/* <ListCoins /> */}
          
            
            <CoinPriceSection />

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
