import React from "react";
import './Soporte.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import blogImagen1 from '../Image/blogImagen1.png';
import blogImagen2 from '../Image/blogImagen2.png';
import blogImagen3 from '../Image/blogImagen3.png';
import SectionSoporte from './SectionSoporte'

const Soporte = () => {
    return(
        <div>
            <section id="blog" classNameName="sectionSoporte">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="blogText sectionSoporteheader text-center">  
                      <div>   
                        <h2 className="sectionSoporteTitle">Ultimas novedades</h2>
                        <div>
                            <p>Lo mantenemos informado sobre los últimos avances</p>  
                            <p>en nuestras soluciones e información general.</p>
                        </div>
                      </div> 
                    </div>
                  </div>
                </div>
                <div className="row">
                 <SectionSoporte
                    imagen='blogImagen1'
                    titleBlogSection='Emision de Factura de Credito Electronica'
                    textBlogSection='Nueva funcionanlidad en la emision de facturacion de credito electronica cuando el contribuyente tiene las condiciones.'
                    authorBlogSection='infolabSoluciones'
                    dateBlogSection='08/12/2022'
                  />
                 <SectionSoporte
                    imagen='blogImagen2'
                    titleBlogSection='Inventarios con Colectores de datos'
                    textBlogSection='Realice inventarios de una manera integrada e intuitiva. Nunca fue tan fácil hacer un control de stock.'
                    authorBlogSection='infolabSoluciones'
                    dateBlogSection='08/12/2022'
                  />
                  <SectionSoporte
                    imagen='blogImagen3'
                    titleBlogSection='Administracion de Balanzas Electrónicas'
                    textBlogSection='Control y gestion de balanzas y articulos de distintos modelos y marcas. Precios de Articulos.'
                    authorBlogSection='infolabSoluciones'
                    dateBlogSection='08/12/2022'
                  />
                </div>
              </div>
            </section>
        </div>
    );
};

export default Soporte