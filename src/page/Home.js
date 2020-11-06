import React from 'react';
import bruja from '../img/bruja.png';
import logo from '../img/logo.png';
import '../style/home.css';
import Header from '../components/Header';
import {
   Link
} from "react-router-dom";

const Home = () => {
   return (
      <>
         <Header bandera={true} />
         <div className="home">
            <div className="container">
               <div className="row">
                  <div className="col-8 espaciado p-0">
                     <img src={logo} alt="" className="logo-home" />
                     <h1 className="marca">Hewtec</h1>
                     <h1 className="bienvenido">Bienvenidos</h1>
                     <h1 className="texto">Soy Deiver</h1>
                     <Link to="/tareas">
                        <button type="button" className="btn btn-primary botonColor btn-lg">START</button>
                     </Link>
                  </div>
                  <div className="col text-center contBruja espaciado p-0">
                     <img src={bruja} alt="" className="bruja" />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Home;