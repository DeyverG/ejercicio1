import '../style/tarea.css'

const Tarea = ({ titulo, descripcion, id, handleClick }) => {

   return (
      <>
         <div className="contenedorTarea">
            <div className="equis" id={id} onClick={handleClick} title="Eliminar">
               <i className="fas fa-times" id={id} onClick={handleClick}></i>
            </div>
            <div className="contenedor-tarea">
               <h2 className="negrita">{titulo}</h2>
               <h5 className="negrita">{descripcion}</h5>
            </div>
         </div>
      </>
   );
}

export default Tarea;