import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { currencies } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCurrency } from "../services/store";

import styled from 'styled-components';
// import { Navbar, Nav, NavDropdown, Form, Button, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// Стилизованные компоненты анти-дизайна
const StyledNavbar = styled(Navbar)`
  background-color: #ff006680;
  border-bottom: 5px solid #ff006680;
  font-family: 'Courier New', Courier, monospace;
  padding: 0.9rem 1rem;
  box-shadow: 2px 2px 0px #ff006680;
  transition: all 0.3s ease;
  
  .navbar-brand {
    font-size: 2rem;
    font-weight: bold;
    color: #fff000;
    text-shadow: 3px 3px 0px #006;
    // &:hover {
    //   color: #fff;
    //   text-shadow: #ff0066;
    }
  }

  .nav-link {
    color: #000;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 1rem;
    text-transform: uppercase;
    text-shadow: 2px 2px 0px #ff0066;
    transition: transform 0.3s ease;
    &:hover {
      color: #fff;
      transform: translate(-3px, -3px);
      // text-shadow: none;
      text-shadow: 2px 2px 0px #ff0066;
    }
  }

  .nav-link-brand {
    color: #000;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 1rem;
    text-transform: uppercase;
    text-shadow: 2px 2px 0px #ff0066;
    transition: transform 0.3s ease;
   
  }

  .navbar-toggler {
    background-color: #fff;
    border: 2px solid #000;
    padding: 0.5rem;
  }

  .navbar-collapse {
    justify-content: space-between;
  }
`;

const StyledForm = styled(Form)`
  input {
    border: 3px solid #000;
    padding: 0.5rem;
    background-color: #fff;
    color: #000;
    box-shadow: 1px 1px 0px #000;
    &:focus {
      outline: none;
      box-shadow: 6px 6px 0px #000;
    }
  }

  button {
    background-color: #000;
    color: #fff;
    border: 3px solid #ffcc00;
    padding: 0.5rem 1rem;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 5px 5px 0px #ff0066;
    &:hover {
      background-color: #ffcc00;
      color: #000;
      box-shadow: 2px 2px 0px #000;
    }
  }
`;

function Navigation() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const selectedCurrency = useSelector((state) => state.selectedCurrency);


  const handleSubmit = event => {
    event.preventDefault();

    const q = event.target.q.value;

    if(!q) return;

    console.log(q);

    navigate("/search/" + q);
    
  };

  return (
    <StyledNavbar expand="lg">
      <Container fluid>
      <div className="nav-link-brand">
        <Navbar.Brand>Bison Wise</Navbar.Brand>
      </div>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <NavDropdown title="Currency" id="navbarScrollingDropdown">
              {currencies.map((currency) => (
                <NavDropdown.Item
                  active={selectedCurrency.name === currency.name}
                  key={currency.name}
                  onClick={() => dispatch(setSelectedCurrency(currency))}
                >
                  {currency.name} {currency.symbol}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Link to="/exchange" className="nav-link">Exchanges</Link>
            <Link to="/compare" className="nav-link">Compare</Link>
          </Nav>
          <StyledForm className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              name="q"
            />
            <Button type="submit">Search</Button>
          </StyledForm>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
    // <Navbar expand="lg" className="bg-body-tertiary mb-4">
    //   <Container fluid>
    //     <Navbar.Brand >Bison Wise</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: "100px" }}
    //         navbarScroll
    //       >
    //         <Link to="/" className="nav-link">Home</Link>
    //         {/* <Nav.Link href="#action1">Home</Nav.Link> */}
    //         {/* <Nav.Link href="#action2">Link</Nav.Link> */}
    //         <NavDropdown title="Currency" id="navbarScrollingDropdown">
    //           {currencies.map((currency) => (
    //             <NavDropdown.Item
    //               active={selectedCurrency.name === currency.name}
    //               key={currency.name}
    //               onClick={() => dispatch(setSelectedCurrency(currency))}
    //             >
    //               {currency.name} {currency.symbol}
    //             </NavDropdown.Item>
    //           ))}
    //         </NavDropdown>
    //         <Link to="/exchange" className="nav-link">
    //         Exchanges
    //         </Link>
    //         <Link to="/compare" className="nav-link">
    //         Compare
    //         </Link>
    //         {/* <Nav.Link href="#" disabled>
    //           Link
    //         </Nav.Link> */}
    //       </Nav>
    //       <Form className="d-flex" onSubmit={handleSubmit}>
    //         <Form.Control
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //           name="q"
    //         />
    //         <Button type="submit" variant="outline-success">Search</Button>
    //       </Form>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default Navigation;
