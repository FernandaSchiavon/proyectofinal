import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import  "./Contacto.css" ;

function Contacto() {
  const [state, handleSubmit] = useForm("xvoyjdpy");
    

  
  if (state.succeeded) {
      return <p>Gracias por comunicarse con Infolab Soluciones!</p>;
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-2">
        </div>
        <div className="col-lg-8">
          <div >
            <h1 className="textTitleContacto textDarkContacto">
              Contacto...
            </h1>
            <h4 className="title">
              Nos mantenemos 
              <span>
                comunicados.
              </span>
            </h4>
          </div>
        </div>
        <div className="col-lg-2">
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2">
        </div>
        <div className="col-lg-8"> 
          Envienos su mensaje y le responderemos a la brevedad... Gracias!
        </div>
        <div className="col-lg-2">
        </div>
      </div>
      <form className="row g-4" onSubmit={handleSubmit}>
        <div className="col-md-2">
        </div>
        <div className="col-md-4">
          <label for="inputNombre" className="form-label">
            Nombre
          </label>
          <input type="text" className="form-control" id="inputNombre" placeholder="Ingrese su nombre..."/>
        </div>
        <div className="col-md-4">
          <label for="email" className="form-label" htmlFor="email">
            Email
          </label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Ingrese su direción de Email..."/>
          <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
          />
        </div>
        <div className="col-md-2">
        </div>
        <div className="col-md-2">
        </div>
        <div className="col-md-8">
          <label for="message" className="form-label">
            Mensaje
          </label>
          <textarea className="form-control"
            id="message"
            name="message"
            placeholder="Ingrese su mensaje..."
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary" disabled={state.submitting}>
            Enviar Mensaje
          </button>
        </div>
      </form>
    </>
  );
}

export default Contacto;