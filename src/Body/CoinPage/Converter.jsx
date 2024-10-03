import React from 'react';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import './Converter.scss';
import { getCurrencyConverter  } from '../../services/api';
import ErrorModal from '../ErrorModal';

const initialState = {
    from: {
        amount: 100,
        coin: 'btc-bitcoin',
    },
    to: {
        amount: 500,
        coin: 'eth-ethereum',
    },

};

function Converter() {
    const [values, setValues] = React.useState(initialState);
    const [leftToRight, setLeftToRight] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    const handleClick = () => {
        setValues ({
            from: values.to,
            to: values.from,

        });      
        setLeftToRight(!leftToRight);
    };



    const handleOnChange = (event) => {        
        const field = event.target.name;
        const value = event.target.value;
        
        
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

    const [errorMessage, setErrorMessage] = React.useState(null);

    useEffect(() => {
        const fetchConversionRate = async () => {
            setLoading(true);
            try {
                const response = await getCurrencyConverter({
                    baseAmount: values.from.amount,
                    baseCurrencyId: values.from.coin,
                    quoteCurrencyId: values.to.coin,
                });

                setValues((prevValues) => ({
                    ...prevValues,
                    to: {
                        ...prevValues.to,
                        amount: response.price,  
                    },
                }));
            } catch (error) {
                console.error("Error fetching conversion rate:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchConversionRate();
    }, [values.from.amount, values.from.coin, values.to.coin]);

    
    return (
        <>
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
                            <option value="btc-bitcoin">Bitcoin</option>
                            <option value="eth-ethereum">Ethereum</option>
                            <option value="usdt-tether">Tether</option>
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
                            // value={values.to.amount}
                            value={loading ? "Loading..." : values.to.amount}
                            readOnly
                            // onChange={handleOnChange}
                            
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
                            <option value="btc-bitcoin">Bitcoin</option>
                            <option value="eth-ethereum">Ethereum</option>
                            <option value="usdt-tether">Tether</option>
                        </Form.Select>
                    </FloatingLabel>
                </InputGroup>
            </Col>
        </Row>

        <ErrorModal 
            errorMessage={errorMessage} 
            show={!!errorMessage} 
            handleClose={() => setErrorMessage(null)} 
            />
        </>
    );
}

export default Converter;