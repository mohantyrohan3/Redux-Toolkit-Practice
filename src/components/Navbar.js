import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function NavBar() {
  return (
        <Navbar>
          <Container>
            <Navbar.Brand href="/">Redux Store</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="cart">Cart</Nav.Link>
            <Navbar.Text className='mx-1' style={{color:'black'}}>
                TOTAL ITEMS  : 0
          </Navbar.Text>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}
