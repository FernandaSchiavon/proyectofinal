import './App.css';

import Header from './Componentes/Header/Header';
import  NavbarApp  from './Componentes/NavbarApp/NavbarApp';
import Contacto from './Componentes/Contacto/Contacto';
import Servicios from './Componentes/Servicios/Servicios';
import Soluciones from './Componentes/Soluciones/Soluciones';
import Soporte from './Componentes/Soporte/Soporte';
import Nosotros from './Componentes/Nosotros/Nosotros';
import Home from './Componentes/Home/Home';
import Footer from './Componentes/Footer/Footer';



import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>;
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavbarApp />}>
            <Route index element={ <Home />} />
            <Route path='Nosotros' element={ <Nosotros />} />
            <Route path='Soluciones' element={ <Soluciones />} />
            <Route path='Servicios' element={ <Servicios />} />
            <Route path='Soporte' element={ <Soporte />} />
            <Route path='Contacto' element={ <Contacto />} />
            <Route path='*' element={ <Navigate replace to="/"/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div className='footer'>
                <Footer correo="soporte@infolabchaco.com.ar"/>;
      </div>
    </div>
  );
}

export default App;