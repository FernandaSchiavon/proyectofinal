import React from "react";
import  "./Soporte.css" ;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import blogImagen1 from '../Image/blogImagen1.png';

const SectionSoporte = (props) =>  {
    return(
        <>
            <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="blogLineWrapper">
                    <div>
                        <a href="postblog.html">
                            <img 
                                src={ require(`../Image/${props.imagen}.png`) } 
                                className="img-fluid" 
                                alt={`infolabsoluciones_imagen_de_${props.imagen}`}
                            />
                        </a>             
                    </div>
                    <div className="blogLineText"> 
                        <h3>
                            <a href="single-post.html">{props.titleBlogSection}</a>
                        </h3>
                        <p>{props.textBlogSection}</p>
                        <a href="postblog.html" className="leermasSectionSoporte">Leer más...</a>
                    </div>
                    <div className="author">
                        <span className="name">
                            <i className="lni-user">
                            </i>
                            <a href="#">
                                Publicado por {props.authorBlogSection}
                            </a>
                        </span>
                        <span className="date float-right">
                            <i className="lni-calendar">
                            </i>
                            <a href="#">
                                {props.dateBlogSection}
                            </a>
                        </span>
                    </div>
                    </div>
                    </div>
        </>            

    )

}

export default SectionSoporte;