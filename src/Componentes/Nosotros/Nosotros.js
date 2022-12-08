import React from "react";
import './Nosotros.css'
import ImagenNosotros from '../Image/nosotros.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Nosotros = () => {
    return(
        <Container fluid>
        <Row>
            <Col sm>
                 <div className="textTitleNosotros">
                            Somos infolab soluciones
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
            <div className="columnImageNosotros">
                <img  className="imageNosotros" src={ImagenNosotros} alt="imagen_nosotrosinfolab" />
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="textSubtitleNosotros">
                    ¿te gustaria conocernos?
                </div>
            </Col>
        </Row>
      <Row>
        <Col>
        </Col>
        <Col sm={3}>
            <div className="textNosotros">
                Somos especialistas en Soluciones y Servicios de Consultoria que abarcan toda la estrucutura de tu empresa. 
            </div>
            <div className="textNosotros">
                Nuestro objetivo de crecer junto a cada cliente se ha ido haciendo realiad con cada implementación.
            </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    );
};

export default Nosotros