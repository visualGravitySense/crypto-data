import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { periods } from './constant';

import styled from 'styled-components';

// const periods = [
//     '1d', '7d', '30d', '1q', '1y', 'YTD', 'Max'
// ]

// Стилизованные компоненты
const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const StyledButton = styled.button`
  background-color: ${({ active }) => (active ? '#333' : '#f0f0f0')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  padding: 0.5rem 0.5rem;
  font-size: 1.1rem;
  font-family: 'Courier New', Courier, monospace;
  border: 3px solid #000;
  box-shadow: ${({ active }) => (active ? '10px 10px 0 #000' : '5px 5px 0 #333')};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    width: 100%;
    height: 100%;
    border: 3px solid #000;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 100%;
    height: 100%;
    background-color: ${({ active }) => (active ? '#ff0066' : '#ccc')};
    z-index: -2;
  }

  &:hover {
    background-color: #333;
    color: #fff;
    transform: translate(-3px, -3px);
    box-shadow: 15px 15px 0 #000;
  }

  &:active {
    transform: translate(0);
    box-shadow: 5px 5px 0 #000;
  }
`;

function ChartPeriods({ selectedPeriod, setSelectedPeriod }) {

    const handleClick = (period) => {
      setSelectedPeriod(period);
    };

    return (
        <StyledButtonGroup>
      {periods.map((period) => (
        <StyledButton
        key={period.label}
        active={selectedPeriod.label === period.label}
        onClick={() => handleClick(period)}
      >
          {period.label}
          </StyledButton>
      ))}
    </StyledButtonGroup>
    );
}

export default ChartPeriods;