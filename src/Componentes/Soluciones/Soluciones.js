import React from "react";
import './Soluciones.css';
import fondoventas from '../Image/fondoventas2022.jpg';
import fondointegrador from '../Image/fondointegrador2022.jpg';
import fondopyme from '../Image/fondopyme2022.jpg';
import fondocompras from '../Image/fondocompras2022.jpg';
import fondofinanzas from '../Image/fondofinanzas2022.jpg';
import fondostock from '../Image/fondostock2022.jpg';


import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Soluciones = () => {
    return(
        <Container>
            <Row>
                <Col className="titleSoluciones">
                <h2 className="textTitleServicios">Soluciones</h2>   
                <h5>Una solución para cada necesidad.</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={fondointegrador} />
                            <Card.Body>
                                <Card.Title>Integrador</Card.Title>
                                <Card.Text>
                                    Integrador de la Soluciòn completa
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Un acceso único a todas las soluciones</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={fondoventas} />
                            <Card.Body>
                                <Card.Title>Ventas</Card.Title>
                                <Card.Text>
                                    Gestión Comercial Retail{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">POS-Facturación-Artículos-Clientes</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={fondopyme} />
                            <Card.Body>
                                <Card.Title>Pyme</Card.Title>
                                <Card.Text>
                                    Gestión Comercial integrada para Pymes.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Simple.Adaptable.</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={fondocompras} />
                            <Card.Body>
                                <Card.Title>Compras</Card.Title>
                                <Card.Text>
                                    Gestión de Compras
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Administracion de Compras</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={fondofinanzas} />
                            <Card.Body>
                                <Card.Title>Finanzas</Card.Title>
                                <Card.Text>
                                    Circuitos Financieros{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Cajas.Flujo de Fondos</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={fondostock} />
                            <Card.Body>
                                <Card.Title>Stock</Card.Title>
                                <Card.Text>
                                    Administración de Stock y Artículos.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Inventarios.Control de Stock.Depósitos</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>

        </Container>
    );
};

export default Soluciones