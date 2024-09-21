import React from "react";
import CoinPriceSection from "./CoinPriceSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoinMetrics from "./CoinMetrics";
import CoinChart from "./CoinChart";
import ChartPeriods from "./ChartPeriods";
import Button from 'react-bootstrap/Button'
import ChildModal from './ChildModal'

function CoinPage() {
  const [childModalShow, setChildModalShow] = React.useState(false);

  const handleShow = () => setChildModalShow(true);
  const handleClose = () => setChildModalShow(false);
  

  return (
    <>
      <CoinPriceSection />
      <Row>
        <Col md={4}>
          <CoinMetrics />
        </Col>
        <Col md={8}>                              
        </Col>
      </Row>

      <Button onClick={handleShow} variant="primary">
        Zoom
      </Button>

      <ChildModal show={childModalShow} handleClose={handleClose}>
        
        <CoinChart />
        <ChartPeriods />
        
      </ChildModal>
    </>
  );
}

export default CoinPage;
