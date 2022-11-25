import React from "react";
import './Nosotros.css'
import ImagenNosotros from '../Image/nosotros.png';


const Nosotros = () => {
    return(

        <div className="nosotros">
            <div className="titleNosotros">
                            <span>Somos infolab soluciones</span>
                            <span>¿te gustaria conocernos?</span> 
            </div>
            <div className="bodyNosotros">
                <div className="imageNosotros">
                    <img src={ImagenNosotros} alt="imagen_nosotrosinfolab" />
                </div>
                <div>
                    <p>
                        Somos especialistas en Soluciones y Servicios de Consultoria que abarcan toda la estrucutura de tu empresa. 
                    </p>
                    <p>
                        Nuestro objetivo de crecer junto a cada cliente se ha ido haciendo realiad con cada implementación.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Nosotros