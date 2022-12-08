import React from "react";
import  "./Tabs.css" ;
import imagenConsultoria from "../Image/consultoria.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TabServicios = (props) =>  {

    return(
    <>
        <Container fluid>
        <Row className="justify-content-md-center">
            <Col xs lg="2">
            </Col>
            <Col md="auto">
                <div className="title">
                    <h3 className="titleServicios">{props.titulo} <span> {props.subtitulo}</span></h3>
                </div>
            </Col>
            <Col xs lg="2">
            </Col>
        </Row>
        <Row justify-content-md-center>
            <Col xs lg="1">
            </Col>
            <Col md="auto" className="section">
                <div className="bodySection">
                    <img 
                            src={ require(`../Image/${props.imagen}.png`) } 
                            className="imagen" 
                            alt={`infolabsoluciones_imagen_de_${props.imagen}`}
                    />
                    <div className="textSection">
                        {props.textoLinea1}
                    </div>
                    <div className="textSection">
                        {props.textoLinea2}
                    </div>
                </div>
            </Col>
        </Row>
        </Container>
    </>            

    )

}

export default TabServicios;