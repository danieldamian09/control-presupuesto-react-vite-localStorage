import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  // Estado para manejar el monto del presupuesto en toda la aplicacion
  const [presupuesto, setPresupuesto] = useState(0)
  // Estado para mostar el componente donde se administra el presupuesto, en caso de que este sea valido
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className="nuevo-gasto"> 
            <img 
              src={IconoNuevoGasto} 
              alt="icono nuevo gasto" 
            />
        </div>
      )}
    </div>
  )

}

export default App;
