import React from 'react';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

const initialState = {
    from: 100,
    to: 500,
};

function Converter() {
    const [values, setValues] = React.useState(initialState);
    const [leftToRight, setLeftToRight] = React.useState(true);

    const handleClick = () => {

        setValues ({
            from: !leftToRight ? values.to : values.from,
            to: !leftToRight ? values.from : values.to,
        });
        
        setLeftToRight(!leftToRight);
    };

    // const from = leftToRight ? values.to : values.from;
    // const to =
    return (
        <Row className="g-2">
      <Col md>
        <InputGroup className="mb-3">
            <FloatingLabel controlId="floatingInputGrid" label="from">
                <Form.Control type="email" placeholder="name@example.com" 
                value={leftToRight ? values.from : values.to}
                defaultValue = {values.to}
                />
                </FloatingLabel>
                
            <FloatingLabel
                controlId="floatingSelectGrid"
                label="Coin"
                >
                <Form.Select aria-label="Floating label select example">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </FloatingLabel>

                
        </InputGroup>
        
      </Col>

        <Col> <FontAwesomeIcon icon={faArrowsRotate} onClick = {handleClick}/> </Col>

      <Col md>
      <InputGroup className="mb-3">
            <FloatingLabel controlId="toInput" label="To">
                <Form.Control type="text" placeholder="name@example.com" 
                value={leftToRight ? values.to : values.from}
                defaultValue = {values.from}
                />
                </FloatingLabel>
                
            <FloatingLabel
                controlId="floatingSelectGrid"
                label="Coin"
                >
                <Form.Select aria-label="Floating label select example">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </FloatingLabel>

                
        </InputGroup>
      </Col>
    </Row>
    );
}

export default Converter;