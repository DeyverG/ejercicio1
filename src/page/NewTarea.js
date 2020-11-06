import React, { useState } from 'react';
import Error from '../components/Error';
import Header from '../components/Header';
import '../style/newTarea.css';
import { nanoid } from 'nanoid'

const NewTarea = ({history}) => {

   const [tarea, setTarea] = useState({
      id: nanoid(),
      titulo: '',
      descripcion: '',
   })
   const [error, setError] = useState(false)

   const { titulo, descripcion} = tarea;
   const handleChange = e => {
      setTarea({
         ...tarea,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = e => {
      e.preventDefault();
      if (titulo.trim() === '' || descripcion.trim() === '') {
         setError(true)
         return;
      }
      setError(false);
      let tareas = JSON.parse(localStorage.getItem('tareas'));
      if (tareas === null) {
         tareas = [];
      }
      tareas.push(tarea)
      localStorage.setItem('tareas', JSON.stringify(tareas));
      history.push('/tareas')
   }

   return (
      <>
         <Header />
         <div className="altura">
            {error ? <Error mensaje='Todos los Campos son Requeridos' /> : null}
            <form className="formulario" onSubmit={handleSubmit}>

               <div className="form-group">
                  <h4 className="text-crear">Nombre Tarea</h4>
                  <input type="text" className="form-control input-crear" name="titulo" onChange={handleChange} />
               </div>
               <div className="form-group">
                  <h4 className="text-crear">Descripción de Tarea</h4>
                  <input type="text" className="form-control input-crear" name="descripcion" onChange={handleChange} />
               </div>
               <button type="submit" className="btn btn-primary boton-crear">GUARDAR TAREA</button>
            </form>
         </div>
      </>
   );
}

export default NewTarea;