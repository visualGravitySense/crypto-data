import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CoinChart from "./CoinChart.jsx";

 
// Основной компонент с кнопкой и модальным окном
const ChartModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Увеличить график
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <CoinChart />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChartModal;
