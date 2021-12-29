import { useState } from "react";
import Header from "./components/Header";

function App() {

  // Estado para manejar el monto del presupuesto en toda la aplicacion
  const [presupuesto, setPresupuesto] = useState(0)

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
    </div>
  )

}

export default App;
