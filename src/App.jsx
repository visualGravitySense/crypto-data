import React from "react";
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./Header/Header";
import Body from "./Body/Body";
import { currencies } from "./constants";


function App() {
  // const [selectedCurrency, setSelectedCurrency] = React.useState(currencies[0]);
  const [selectedCurrency, setSelectedCurrency] = React.useState('EUR'); 
  return (
    <Container>
      <Header
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />
      <Body selectedCurrency={selectedCurrency} />
    </Container>
  );
}

export default App;
