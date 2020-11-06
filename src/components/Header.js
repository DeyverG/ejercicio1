import React from 'react';
import bruja from '../img/bruja.png'
import logo from '../img/logo.png'
import '../style/header.css'
import {
   Link
} from "react-router-dom";

const Header = (props) => {
   return (
      <>
         <div className='fondo'>
            <div className="item">
               <Link to="/">
                  <img src={logo} alt="" className="logo" />
               </Link>
               <h1 className="titulo">Hewtec</h1>
               {props.bandera
                  ?
                  null
                  :
                  <Link to="/editar-perfil">
                     <img src={bruja} alt="" className="bruja-bar" />
                  </Link>}
            </div>
         </div>
      </>
   );
}

export default Header;