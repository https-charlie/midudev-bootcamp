import ReactDOM from "react-dom";
import { useState } from "react"; /* Es un hook */

const rootElement = document.getElementById("root");

const App = (props) => {

  const [contadorValue, updateContador] = useState(14);

/* Devuelve un array de dos posiciones */  
/*const contador =  useState(5) 
const contadorValue = contador[0]
const updateContador = contador[1]*/

/*setInterval(() =>{
  updateContador(contadorValue + 1)
},3000
)*/


  return (
  <div>
    <h1>{contadorValue}</h1>
    <button onClick={() => {/*updateContador(contadorValue + 1)*/ 
    updateContador(prevContador => {return prevContador+1}) //El updateContador no solo puede recibir el valor , sino una funciòn que traiga al ejecutar pase el nuevo valor que debe tener el state
    
    }}>Incrementar</button>
  </div>
  ) 
}


// updateContador(parametro1 el valor contadorValue, parametro2 ejecución de una función nueva)


ReactDOM.render(<App />, rootElement);



