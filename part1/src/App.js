
import './App.css';
import Mensaje from './Mensaje.js';


const Descripcion = () =>{
  return <p>Esta es la app curso fullstack bootcamp</p>
}


const App = () => {

  return (
    <div className="App">
     <Mensaje color='red' message='Estamos trabajando'/>
     <Mensaje color='green' message='En un curso'/>
     <Mensaje color='yellow' message='De React'/>
     <Descripcion />
    </div>
  );
}
/* Date()Timestamp */

export default App;
