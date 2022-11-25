import React from 'react';
import CartaEjemplo from '';

export default function PersonajesList(){
    const listaPersonajes = [{nombre:"aa", clase:"aa", sistema:"dd", id:1}];

    const [personajes, setPersonajes] = useState([listaPersonajes]);

    return(
        <>
        <div>
            <label>eti</label>
        </div>
        <div className='contenedor'>
            {personajes.map((personaje) => {
                <CartaEjemplo nombre={personaje.nombre} key={personaje.id} />
            }
            )
            }
        </div>
        </>
    )
}