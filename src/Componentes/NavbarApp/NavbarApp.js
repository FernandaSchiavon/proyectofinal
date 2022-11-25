import React from 'react'
import "./NavbarApp.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../Image/logo-infolab.png';


const NavbarApp = () => {
    return (
        <div className="navbarBg">
          <div className="navBarpage">
            <Navbar className="p-3 mb-2 text-primary" expand="md">
              <Container>
                <Navbar.Brand as={Link} to="/"> 
                    <img src={ Logo } width="140" height="79" alt="logo_infolabsoluciones"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto" id="navHome">
                    <Nav.Link as={Link} to="/" className="text-dark">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/nosotros" className="text-dark">Nosotros</Nav.Link>
                    <Nav.Link as={Link} to="/soluciones" className="text-dark">Soluciones</Nav.Link>
                    <Nav.Link as={Link} to="/servicios" className="text-dark">Servicios</Nav.Link>
                    <Nav.Link as={Link} to="/soporte" className="text-primary">Ayuda y Soporte</Nav.Link>                    
                    <Nav.Link as={Link} to="/contacto" className="text-success">Contacto</Nav.Link>
                    <Nav.Link as={Link} to="/Ejemplo">Ejemplo</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div className="navBarhome">
            <Outlet>
            </Outlet>
          </div>
        </div>
    );
}

export default NavbarApp;