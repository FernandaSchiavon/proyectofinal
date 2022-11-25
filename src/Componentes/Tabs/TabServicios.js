import React from "react";
import  "./Tabs.css" ;
import imagenConsultoria from "../Image/consultoria.png"


const TabServicios = (props) =>  {

    return(
    <>
        <div className="title">
        <h3 >{props.titulo}</h3>
        </div>
        <div className="textTab">
            <div>
                <img 
                    src={ require(`../Image/${props.imagen}.png`) } 
                    className="imagen" 
                    alt={`infolabsoluciones_imagen_de_${props.imagen}`}
                />
            </div>
            <div className="text">
                {props.texto}
            </div>
        </div>
    </>            

    )

}

export default TabServicios;