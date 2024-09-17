import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const periods = [
    '1d', '7d', '30d', '1q', '1y', 'YTD', 'Max'
]

function ChartPeriods() {
    const [selected, setSelected] = React.useState(periods[3]);

    const handleClick = (period) => {
        setSelected(period);
    };

    return (
        <ButtonGroup aria-label="Basic example">
            {periods.map((period) => (
                <Button
                    key={period}
                    variant="secondary"
                    onClick={() => handleClick(period)}
                    active={selected === period}
                >{period}</Button>
            ))}

        </ButtonGroup>
    );
}

export default ChartPeriods