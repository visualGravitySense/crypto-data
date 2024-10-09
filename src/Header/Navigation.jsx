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
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container fluid>
        <Navbar.Brand>Bison Wise</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-link">Home</Link>
            {/* <Nav.Link href="#action1">Home</Nav.Link> */}
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
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
            <Link to="/exchange" className="nav-link">
            Exchanges
            </Link>
            <Link to="/compare" className="nav-link">
            Compare
            </Link>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="q"
            />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
