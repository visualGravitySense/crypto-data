import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import CoinChart from './CoinChart'; // Импортируем график
import styled from 'styled-components';

// Стили для Anti Design кнопки
const AntiDesignButton = styled.button`
  background-color: #000000;   /* Кислотный розовый цвет */
  color: white;
  font-size: 16px;
  padding: 15px;
  margin: 16px;
  border-radius: 1px;
  border: 1px solid #0000ff;   /*  синяя рамка */
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  box-shadow: 1px 1px 0 #00ff00; /* Грубая тень зеленого цвета */
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(-0.11deg); /* Увеличение размера и вращение при наведении */
    background-color: #0772ee;  /* Поменяем цвет при наведении на кислотно-зеленый */
    border-color: #ff69b4;      /* Меняем рамку при наведении */
  }

  &:active {
    transform: scale(0.95) rotate(0deg);  /* Анимация при нажатии */
    transition: all 1s ease;
  }
`;

const ChartModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Используем нашу Anti Design кнопку */}
      <AntiDesignButton onClick={handleShow}>
        Enlarge Chart
      </AntiDesignButton>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Body>
          <CoinChart />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChartModal;
