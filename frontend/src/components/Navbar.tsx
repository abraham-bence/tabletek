import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavigationBar() {
  return (
    <Navbar bg='dark' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href="/">Web-bolt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/tablets">Kezdőlap</Nav.Link>
            <Nav.Link href='/tablets/add'>Tablet felvétel</Nav.Link>
            <Nav.Link href='/tablets/remove'>Tabletek törlése</Nav.Link>
            <NavDropdown title="Leg..." id="basic-nav-dropdown">
                <NavDropdown.Item href="/tablets/expensive">drágább</NavDropdown.Item>
                <NavDropdown.Item href='/tablets/cheap'>olcsóbb</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
