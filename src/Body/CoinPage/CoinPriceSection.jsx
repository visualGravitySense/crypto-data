import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CoinPriceChange from './CoinPriceChange';
// import ErrorModal from "./ErrorModal";

function CoinPriceSection() {
  return (
    <Container>
      <Row>
        {/* <Col>Bitcoin</Col>
        <Col>56 000 $</Col> */}
        <Col>
          <CoinPriceChange />
        </Col>
      </Row>
    </Container>
  );
}

export default CoinPriceSection;
