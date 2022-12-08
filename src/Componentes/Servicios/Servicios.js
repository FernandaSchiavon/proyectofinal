import React from "react";


import './Servicios.css';
import imagenServicios from '../Image/servicios.png';
import Tabs from '../Tabs/Tabs'
import TabServicios from '../Tabs/TabServicios'

const Servicios = ({ query }) => {
    return(
        <div>          
            <h2 className="textTitleServicios">Servicios</h2>
            <h5>Servicios y Soluciones se integran y se convierten en su herramienta de gestión. A su medida.</h5>
            <main>
                <Tabs initialTab="consultoria">
                    <div label="consultoria" iconTab="lni-briefcase" tituloTab="Consultoria">
                        <TabServicios 
                            titulo='Consultoria en Gestión'
                            subtitulo='para crecer juntos'
                            imagen='consultoria'
                            textoLinea1='Analizamos en conjunto los procesos de negocio de su empresa con el objetivo de mejorar el rendimiento
                            de su organización.'
                            textoLinea2='Aportamos una visión integral y objetiva para acompañar a su empresa en el camino de mejora continua.'
                        />
                    </div>
                    <div label="capacitacion" iconTab="lni-bullhorn" tituloTab="Capacitacion">
                        <TabServicios 
                                titulo='Capacitación permanente'
                                subtitulo='para garantizar la mejor operación de cada Solución.'
                                imagen='capacitacion'
                                textoLinea1='Lo acompañamos en todas las dudas y cuestionamientos que surjan tanto en las etapas iniciales de 
                                implementación como en la operatoria diaria.'
                                textoLinea2='Nuestra principal tarea es resolver cualquier inquietud y guiarlo en tareas como configuración,
                                parametrización de la Solucón para que se adapte a los procesos de cada área de su empresa.'
                                
                        />
                    </div>
                    <div label="asesoramiento" iconTab="lni-network" tituloTab="Asesoramiento">
                        <TabServicios 
                                titulo='Asesoramiento integral'
                                subtitulo='en todas las areas'
                                imagen='asesoramiento'
                                 
                                textoLinea1='Lo asesoramos de manera integral en todos los procesos y áreas de su empresa para que el'
                                textoLinea2='resultado sea una Solución que potencie el despegar de su empresa en el camino de la tecnología.'
                        />
                    </div>
                </Tabs>
            </main>
        </div>
    );
};

export default Servicios;

