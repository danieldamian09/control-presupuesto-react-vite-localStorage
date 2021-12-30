import { useState } from "react";
import Header from "./components/Header";

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
    </div>
  )

}

export default App;
