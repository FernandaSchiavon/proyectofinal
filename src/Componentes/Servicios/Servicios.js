import React from "react";


import './Servicios.css';
import imagenServicios from '../Image/servicios.png';
import Tabs from '../Tabs/Tabs'
import TabServicios from '../Tabs/TabServicios'

const Servicios = ({ query }) => {
    return(
        <div>          
            <h2>Servicios</h2>
            <div>
                <img 
                    src={ imagenServicios }
                    className="imagenServicios"
                    alt="infolabsoluciones_servicios"
                />
            </div>
            <main>
                <Tabs initialTab="consultoria">
                    <div label="consultoria">
                        <TabServicios 
                            titulo='Consultoria en Gestión'
                            imagen='consultoria'
                            texto='Texto de la seccion consultoria'
                        />
                    </div>
                    <div label="capacitacion">
                        <TabServicios 
                                titulo='Capacitación continua'
                                imagen='capacitacion'
                                texto='Texto de la seccion capacitacion'
                        />
                    </div>
                    <div label="asesoramiento">
                        <TabServicios 
                                titulo='Asesoramiento'
                                imagen='asesoramiento'
                                texto='Texto de la seccion asesoramiento'
                        />
                    </div>
                </Tabs>
            </main>
        </div>
    );
};

export default Servicios;

