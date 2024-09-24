import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

// Стили для Anti Design кнопки
const AntiDesignButton = styled.button`
  background-color: #000000;   /* Кислотный розовый цвет */
  color: white;
  font-size: 16px;
  padding: 15px;
  // border-radius: 5px;
  border: 1px solid #0000ff;   /*  синяя рамка */
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  box-shadow: 1px 1px 0 #00ff00; /* Грубая тень зеленого цвета */
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(-0.11deg); /* Увеличение размера и вращение при наведении */
    background-color: #00aa00;  /* Поменяем цвет при наведении на кислотно-зеленый */
    border-color: #ff69b4;      /* Меняем рамку при наведении */
  }

  &:active {
    transform: scale(0.95) rotate(0deg);  /* Анимация при нажатии */
    transition: all 1s ease;
  }
`;

function ChildModal({ show, handleClose, children }) {

  return (
    <>      
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChildModal;