import React from 'react';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import './Converter.css';

const initialState = {
    fromValue: 100,
    toValue: 500,
    fromCoin: '1',
    toCoin: '2',
};

function Converter() {
    const [values, setValues] = React.useState(initialState);
    const [leftToRight, setLeftToRight] = React.useState(true);

    const handleClick = () => {
        setValues ({
            fromValue: values.toValue,
            toValue: values.fromValue,
            fromCoin: values.toCoin,
            toCoin: values.fromCoin,
        });      
        setLeftToRight(!leftToRight);
    };

    const handleSelectChange = (e, type) => {
        const { value } = e.target;
        setValues(prevState => ({
            ...prevState,
            [type]: value,
        }));
    };

    
    return (
        <Row className="mt-5 g-2 converter-container">
        <Col md >
            <InputGroup className="mb-3">
                <FloatingLabel controlId="floatingInputGrid" label="From">
                    <Form.Control 
                        type="number"
                        value={values.fromValue}
                        onChange={e =>
                            setValues(prevState => ({
                                ...prevState,
                                fromValue: e.target.value,
                            }))
                        }
                    />
                    </FloatingLabel>
                    
                <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Coin">
                    <Form.Select 
                        value={values.fromCoin}
                        onChange={e => handleSelectChange(e, 'fromCoin')}
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
                        type="number"  
                        value={values.toValue}
                        onChange={e =>
                            setValues(prevState => ({
                                ...prevState,
                                toValue: e.target.value,
                            }))
                        }
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Coin"
                    >
                    <Form.Select 
                        value={values.toCoin}
                        onChange={e => handleSelectChange(e, 'toCoin')}
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