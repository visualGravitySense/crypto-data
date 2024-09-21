import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

function CoinChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 4,
          right: 5,
          left: 5,
          bottom: 1,
        }}
      >
        {/* Сетка с необычными цветами */}
        <CartesianGrid stroke="#ff69b4" strokeDasharray="10 10" /> 
        
        {/* Оси с крупными шрифтами и яркими цветами */}
        <XAxis dataKey="name" stroke="#000000" tick={{ fontSize: 20, fontWeight: 'bold' }} />
        <YAxis stroke="#000000" tick={{ fontSize: 20, fontWeight: 'bold' }} />
        
        {/* Настройки области графика */}
        <Tooltip cursor={{ strokeDasharray: '5 5' }} />
        <Area type="step" dataKey="uv" stroke="#00ffff" fill="#000000" strokeWidth={5} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default CoinChart;