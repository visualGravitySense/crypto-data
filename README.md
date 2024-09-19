# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Чтобы разработать компонент, который открывает график в модальном окне с нуля, нужно пройти несколько шагов. Ниже я опишу процесс разработки компонента поэтапно — от начала до конца, с объяснением каждого шага.

### Шаг 1: Настройка окружения
Для разработки на React с использованием библиотеки Bootstrap и Recharts, сначала нужно настроить окружение. Я предположу, что у вас уже установлен Node.js и вы используете менеджер пакетов `npm` (или `yarn`).

1. **Создайте новый проект React** (если проекта ещё нет):
   ```bash
   npx create-react-app my-chart-modal
   cd my-chart-modal
   ```

2. **Установите необходимые библиотеки**:
   - `react-bootstrap` для использования модальных окон.
   - `bootstrap` для стилей.
   - `recharts` для создания графика.

   Команды для установки:
   ```bash
   npm install react-bootstrap bootstrap recharts
   ```

3. **Импортируйте стили Bootstrap** в `src/index.js`:
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

### Шаг 2: Создание компонента графика
Теперь давайте создадим график, который будет отображаться в модальном окне.

1. **Создайте файл `CoinChart.jsx`** в папке `src/components`:
   ```bash
   mkdir src/components
   touch src/components/CoinChart.jsx
   ```

2. **Добавьте код графика** в файл `CoinChart.jsx`:
   ```javascript
   import React from 'react';
   import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

   // Данные для графика
   const data = [
     { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
     { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
     { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
     { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
     { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
     { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
     { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
   ];

   // Компонент графика
   function CoinChart() {
     return (
       <ResponsiveContainer width="100%" height={400}>
         <AreaChart
           data={data}
           margin={{
             top: 10,
             right: 30,
             left: 0,
             bottom: 0,
           }}
         >
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="name" />
           <YAxis />
           <Tooltip />
           <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
         </AreaChart>
       </ResponsiveContainer>
     );
   }

   export default CoinChart;
   ```

### Шаг 3: Создание компонента модального окна
Теперь создадим компонент, который будет отвечать за отображение модального окна с кнопкой для его открытия.

1. **Создайте файл `ChartModal.jsx`** в той же папке `src/components`:
   ```bash
   touch src/components/ChartModal.jsx
   ```

2. **Добавьте код для модального окна в этот файл**:
   ```javascript
   import React, { useState } from 'react';
   import { Button, Modal } from 'react-bootstrap';
   import CoinChart from './CoinChart'; // Импортируем график

   // Основной компонент с кнопкой и модальным окном
   const ChartModal = () => {
     const [show, setShow] = useState(false);  // Состояние для управления модалкой

     const handleClose = () => setShow(false); // Закрытие модалки
     const handleShow = () => setShow(true);   // Открытие модалки

     return (
       <>
         <Button variant="primary" onClick={handleShow}>
           Увеличить график
         </Button>

         <Modal show={show} onHide={handleClose} size="lg">
           <Modal.Body>
             <CoinChart />  {/* Вставляем наш компонент графика */}
           </Modal.Body>
         </Modal>
       </>
     );
   };

   export default ChartModal;
   ```

### Шаг 4: Интеграция компонентов в приложение
Теперь нужно использовать компонент `ChartModal` в основном приложении.

1. **Откройте `src/App.js`** и импортируйте компонент `ChartModal`:
   ```javascript
   import React from 'react';
   import ChartModal from './components/ChartModal'; // Импортируем модалку с графиком

   function App() {
     return (
       <div className="App">
         <h1>График криптовалюты</h1>
         <ChartModal />  {/* Вставляем модалку с графиком */}
       </div>
     );
   }

   export default App;
   ```

### Шаг 5: Запуск приложения
Теперь, когда все компоненты настроены, можно запустить приложение.

1. Запустите приложение:
   ```bash
   npm start
   ```

2. Откройте браузер и перейдите по адресу `http://localhost:3000`. На странице будет кнопка "Увеличить график", при нажатии на которую откроется модальное окно с вашим графиком.

### Подведение итогов:
1. Мы начали с настройки окружения, установив необходимые библиотеки.
2. Создали компонент для отображения графика (`CoinChart`).
3. Создали компонент модального окна (`ChartModal`), который использует график.
4. Интегрировали модальное окно в основное приложение.

Таким образом, весь процесс создания компонента с модальным окном и графиком завершён. Теперь у вас есть модальное окно, которое открывает интерактивный график, и вы можете продолжать настраивать его по необходимости.