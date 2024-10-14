import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsSubtract, BsMinecart, BsTree } from "react-icons/bs";

function NavBarClimbers() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Climbers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div className="d-flex align-items-center">
              <BsTree />
              <Nav.Link href="#features">Treeworking</Nav.Link>
            </div>
            <div className="d-flex align-items-center">
              <BsMinecart />
              <Nav.Link href="#quotation">Get quotation</Nav.Link>
            </div>
            <div className="d-flex align-items-center">
              <BsSubtract />
              <Nav.Link href="#projects">Projects</Nav.Link>
            </div>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarClimbers;
