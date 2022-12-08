import React from "react";
import './Home.css'
import ImagenHome from '../Image/home.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <Container fluid="md">
        <Row>
            <Col>
            <h1 >
                    <div>
                        <span className="textTitle textDark">Soluciones </span>
                        <span className="textSubtitle textRed"> eficientes </span> 
                    </div>
                    <div>
                        <span className="textSubtitle textDark">para ayudarte</span> 
                        <span className="textTitle textDark">a crecer </span> 
                    </div>
                </h1>
                <h2 className="subTitle">
                    <div className="textNormal">Desarrollamos soluciones de negocios flexibles que se adaptan a tu empresa.
                    </div>
                </h2>
            </Col>
            <Col>
                <img src={ImagenHome} alt="imagen-equipoInfolab" />            
            </Col>
        </Row>
              
        </Container>
    );
};

export default Home