import React from 'react'
import '../style/plus.css'
import {
   Link
} from "react-router-dom";
const Plus = () => {
   return (
      <Link to="/crear-tarea">
         <div className="contenedor-plus">
            <i className="fas fa-plus texto-plus"></i>
         </div>
      </Link>
   );
}

export default Plus;