import './App.css';
//Agrego componente person
function Person(props){
  return(
    <div className='person' style={{backgroundColor:props.color}}>
      <h1>Nombre: {props.nombre}</h1>
      <p>Edad: {props.edad}</p>
    </div>
  )
}
export default function App() {
  return (
    <div className="App">
        <h1>Pagina en react</h1> 
        {/*Agrego un componente*/}
        <Person nombre="Cristian" edad="20" color="rgb(233, 175, 68)"/>
        <Person nombre="Alejandra" edad="23" color="cyan"/>
        <Person nombre="Karol" edad="21" color="rgb(143, 44, 201)"/>
    </div>
  );
}