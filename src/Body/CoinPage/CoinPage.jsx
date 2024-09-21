import CoinPriceSection from "./CoinPriceSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoinMetrics from "./CoinMetrics";
import CoinChart from "./CoinChart";
import ChartPeriods from "./ChartPeriods";
import Button from 'react-bootstrap/Button'

function CoinPage() {
  return (
    <>
      <CoinPriceSection />
      <Row>
        <Col md={4}>
          <CoinMetrics />
        </Col>
        <Col md={8}>
          <ChartPeriods />
          <CoinChart />
          <Button variant="primary">Zoom</Button>
          
        </Col>
      </Row>
    </>
  );
}

export default CoinPage;
