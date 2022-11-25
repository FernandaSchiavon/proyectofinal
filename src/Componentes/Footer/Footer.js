import React from "react";


const Footer = ({correo}) => {
    return (
        <footer className="PiePagina">
            <a href="">Escribanos un correo a {correo}</a>
        </footer>

    )
};

export default Footer;