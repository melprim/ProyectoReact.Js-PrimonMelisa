import React from 'react';
import logo from '../../assets/LOGO CORTINAS.png';
import '../navBar/NavBar.css';
import CartWidget from '../cardwidget/CartWidget';

const NavBar = () => {
  return (
    <div className='contenedor'>
        <img className='imgLogo' src = {logo} alt='imagenlogo'/>
        <ul>
            <li><a href=" ">Home</a></li>
            <li><a href=" ">Tipos de Cortinas</a></li>
            <li><a href=" ">Como medir e Instalar</a></li>
            <li><a href=" ">Contacto</a></li>
            <li><a className='comprar' href=" ">COMPRÁ AHORA! </a></li>
            <CartWidget />
        
        </ul>
    </div>
  )
}

export default NavBar