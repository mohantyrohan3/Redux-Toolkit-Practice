import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function NavBar() {
  const cart = useSelector(state => state.cart);




  return (
        <Navbar>
          <Container>
            <Navbar.Brand><Link style={{textDecoration:'none',color:'black'}} to='/'> Redux Store</Link></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav>
            <Nav.Link><Link style={{textDecoration:'none',color:'black'}} to='/'> Home</Link></Nav.Link>
            <Nav.Link> <Link style={{textDecoration:'none',color:'black'}} to='/cart'> Cart</Link> </Nav.Link>
            <Navbar.Text className='mx-1' style={{color:'black'}}>
                TOTAL ITEMS  : {cart.length}
          </Navbar.Text>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}
