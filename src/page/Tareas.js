import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Plus from '../components/Plus'
import Tarea from '../components/Tarea';

const Tareas = () => {

   const [tareas, setTareas] = useState([]);
   const [bandera, setBandera] = useState(false)

   useEffect(() => {
      if (!bandera) {
         const consulta = JSON.parse(localStorage.getItem('tareas'));
         if (consulta) {
            setTareas(
               consulta
            )
         }
         setBandera(true)
      }
   }, [tareas,bandera])

   const handleClick = e => {
      const filtrado = tareas.filter( tarea =>(tarea.id !== e.target.id))
      localStorage.setItem('tareas', JSON.stringify(filtrado));
      setTareas(filtrado)
   }

   return (
      <>
         <Header />
         <Plus />
         <div>
            {tareas.length !== 0 ?

               tareas.map(tarea => (
                  <Tarea
                     key={tarea.id}
                     titulo={tarea.titulo}
                     descripcion={tarea.descripcion}
                     id={tarea.id}
                     handleClick={handleClick}
                  />
               ))

               :
               <h1 className="negrita no-tareas">No hay tareas registradas</h1>
            }

         </div>
      </>
   );
}

export default Tareas;