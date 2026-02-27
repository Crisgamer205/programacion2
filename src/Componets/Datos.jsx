import './Datos.css';

export function Datos(){
    const datos = {
        nombre: "Cristian",
        edad: 20,
        telefono: 3132889243
    }
    return(
        <div className="datos">
            <h2>Nombre: {datos.nombre}</h2>
            <h2>Edad: {datos.edad}</h2>
            <h2>Telefono: {datos.telefono}</h2>
        </div>
    )
}