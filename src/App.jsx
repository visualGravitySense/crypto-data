import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Body />
      <Footer/>
    </Container>
  );
}

export default App;
