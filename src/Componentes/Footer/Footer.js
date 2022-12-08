import React from "react";
import './Footer.css';
import isoLogo from '../Image/isologoinfolab.png';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





const Footer = ({correo}) => {
    

    return (
            <footer className="pageFooter">
            <Container sm>
                    <Row>
                    <Col>
                    
                    <img src={ isoLogo } className="imageFooter" alt="logo_infolabsoluciones"/>
              
                </Col>

                    <Col>
                        <div className="footerContacto">
                            <h5>Contacto</h5>
                            <p>{correo}</p>
                            <p>+54 362 480 9651</p>
                        </div>
                    </Col>
                    <Col>
                        <a href="#"><i className="lni-facebook"></i></a>
                        <a href="#"><i className="lni-instagram"></i></a>
                    </Col>
                </Row>
                
        </Container>     
       </footer>
       )
};

export default Footer;