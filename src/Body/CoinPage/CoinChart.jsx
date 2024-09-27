import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
//   { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
//   { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
//   { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
//   { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
//   { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
//   { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
// ];

function CoinChart({ data }) {
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
        {/* Сетка с необычным цветом и штриховкой */}
        <CartesianGrid stroke="#ff69b4" strokeDasharray="15 15" /> 
        
        {/* Оси с крупными шрифтами, яркими цветами и необычным стилем */}
        <XAxis 
          dataKey="timestamp" 
          stroke="#ff4500" 
          tick={{ fontSize: 18, fontWeight: '700', fill: '#000', fontFamily: 'Courier New' }} 
        />
        <YAxis 
          dataKey="price" 
          stroke="#ff4500" 
          tick={{ fontSize: 18, fontWeight: '700', fill: '#000', fontFamily: 'Courier New' }} 
        />
        
        {/* Настройки области графика с яркими цветами */}
        <Tooltip 
          cursor={{ stroke: '#00ffff', strokeWidth: 3, strokeDasharray: '5 5' }} 
          contentStyle={{ backgroundColor: '#000', color: '#fff', border: '2px solid #ff69b4' }}
        />
        <Area 
          type="monotone" 
          dataKey="price" 
          stroke="#ff1493" 
          fillOpacity={0.8} 
          fill="url(#colorUv)" 
          strokeWidth={4}
          // dot={{ fill: '#ff1493', stroke: '#000', strokeWidth: 2, r: 6 }} // Крупные точки на графике
        />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff1493" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#000" stopOpacity={0.2} />
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default CoinChart;
