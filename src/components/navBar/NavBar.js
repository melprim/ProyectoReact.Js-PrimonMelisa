import React from 'react';
import logo from '../../assets/LOGO CORTINAS.png';
import '../navBar/NavBar.css';
import { Link} from 'react-router-dom';
import NavBarDropdown from './NavBarDropdown';

const NavBar = () => {
  return (
    <div className='contenedor'>
        <Link to="/"><img className='imgLogo' src = {logo} alt='imagenlogo'/></Link>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><NavBarDropdown/></li>
            <li><Link to="/medirEInstalar/">Como medir e Instalar</Link></li>
            <li><Link to="/contacto/">Contacto</Link></li>
            <Link to="/carrito/"><i className="fas fa-shopping-cart icono-carrito"></i></Link>  
        </ul>
    </div>
  )
}

export default NavBar