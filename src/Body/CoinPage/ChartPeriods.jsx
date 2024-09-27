import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { periods } from './constant';

// const periods = [
//     '1d', '7d', '30d', '1q', '1y', 'YTD', 'Max'
// ]

function ChartPeriods({ selectedPeriod, setSelectedPeriod }) {

    const handleClick = (period) => {
      setSelectedPeriod(period);
    };

    return (
        <ButtonGroup>
      {periods.map((period) => (
        <Button
          key={period.label}
          variant="secondary"
          onClick={() => handleClick(period)}
          active={selectedPeriod.label === period.label}
        >
          {period.label}
        </Button>
      ))}
    </ButtonGroup>
    );
}

export default ChartPeriods;