import React from 'react';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import './Converter.scss';

const initialState = {
    from: {
        amount: 100,
        coin: 2,
    },
    to: {
        amount: 500,
        coin: 1,
    },

};

function Converter() {
    const [values, setValues] = React.useState(initialState);
    const [leftToRight, setLeftToRight] = React.useState(true);

    const handleClick = () => {
        setValues ({
            from: values.to,
            to: values.from,

        });      
        setLeftToRight(!leftToRight);
    };



    const handleOnChange = (event) => {
        console.log(event);
        const field = event.target.name;
        const value = event.target.value;
        console.log(value);
        
        setValues ({
            ...values,
            [field]: {
                ...values[field],
                amount: value,
            },
        });
        
    };

    const handleOnSelect = (event) => {

        const field = event.target.name;
        const value = event.target.value;

        
        setValues ({
            ...values,
            [field]: {
                ...values[field],
                coin: value,
            },
        });
        
    };

    
    return (
        <Row className="mt-5 g-2 converter-container">
        <Col md >
            <InputGroup className="mb-3">
                <FloatingLabel controlId="floatingInputGrid" label="From">
                    <Form.Control 
                        name="from"
                        type="text"
                        value={values.from.amount}
                        
                        onChange={handleOnChange}
                        
                    />
                    </FloatingLabel>
                    
                <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Coin">
                    <Form.Select 
                        value={values.from.coin}
                        name="from"
                        
                        onChange={handleOnSelect}
                        >
                        <option value="1">Bitcoin</option>
                        <option value="2">Ethereum</option>
                        <option value="3">Tether</option>
                    </Form.Select>
                </FloatingLabel>
            </InputGroup>            
        </Col>

            <Col md="auto" className="d-flex align-items-center button-change"> 
                <FontAwesomeIcon 
                    icon={faArrowsRotate} 
                    onClick = {handleClick}
                    className="rotate-icon"
                    /> 
            </Col>

        <Col md>
            <InputGroup className="mb-3">
                <FloatingLabel controlId="toInput" label="To">
                    <Form.Control 
                        name="to"
                        type="text"  
                        value={values.to.amount}
                        
                        onChange={handleOnChange}
                        
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="to"
                    label="Coin"
                    >
                    <Form.Select 
                        value={values.to.coin}
                        name="to"
                        
                        onChange={handleOnSelect}

                    >
                        <option value="1">Bitcoin</option>
                        <option value="2">Ethereum</option>
                        <option value="3">Tether</option>
                    </Form.Select>
                </FloatingLabel>
            </InputGroup>
        </Col>
    </Row>
    );
}

export default Converter;