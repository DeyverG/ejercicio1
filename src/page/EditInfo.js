import React from 'react'
import Header from '../components/Header';
import Plus from '../components/Plus';
import { Link } from 'react-router-dom';
import '../style/editInfo.css'

const EditInfo = () => {
   return (
      <>
         <Header />
         <Plus />
         <form className="formulario-editar">
            <div className="form-group">
               <h4 className="text-editar">Nombre:</h4>
               <input type="text" className="form-control input-editar" disabled value="Deyver David" />
            </div>
            <div className="form-group">
               <h4 className="text-editar">Apellidos:</h4>
               <input type="text" className="form-control input-editar" disabled value="García Sanchez" />
            </div>
            <div className="form-group">
               <h4 className="text-editar">Estudios:</h4>
               <input type="text" className="form-control input-editar" disabled value="Estudiante de Ing. de Sistemas" />
            </div>
            <div className="form-group">
               <h4 className="text-editar">Hobbits:</h4>
               <input type="text" className="form-control input-editar" disabled value="Video Juegos, dormir y programar" />
            </div>
            <Link to="/tareas">
               <button type="submit" className="btn btn-primary boton-crear">VER MIS TAREA</button>
            </Link>
         </form>
      </>
   );
}

export default EditInfo;