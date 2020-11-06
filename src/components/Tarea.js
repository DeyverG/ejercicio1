import '../style/tarea.css'

const Tarea = ({ titulo, descripcion, id, handleClick }) => {

    return (
        <>
        <div className="contenedor-tarea">
            <h2 className="negrita">{titulo}</h2>
            <h5 className="negrita">{descripcion}</h5>
        </div>
        <div className="equis" id={id} onClick={handleClick}>
            x
        </div>
        </>
    );
}

export default Tarea;