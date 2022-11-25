import React from "react";
import './Home.css'
import ImagenHome from '../Image/home.png';

const Home = () => {
    return (
        <div className="home">
            <div className="titulo">
                <h1 className="titulo_1">
                    <div>
                        <span className="textTitle textDark">Soluciones </span>
                        <span className="textSubtitle textRed"> eficientes </span> 
                    </div>
                    <div>
                        <span className="textSubtitle textDark">para ayudarte</span> 
                        <span className="textTitle textDark">a crecer </span> 
                    </div>
                </h1>
                <h2 className="titulo_2">
                    <div className="textNormal">Desarrollamos soluciones de negocios flexibles que se adaptan a tu empresa.
                    </div>
                </h2>
                

                            <div class="header-singup wow fadeInUp">
                                    <a class="main-btn main-btn" href="#contact">Cont&aacute;ctenos...</a>
                            </div>
            </div>
            <div className="imagenHome">
                    <div className="image">
                        <img src={ImagenHome} alt="imagen-equipoInfolab" />
                    </div>
            </div>
        </div>
    );
};

export default Home