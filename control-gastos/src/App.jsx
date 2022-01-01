import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from "./components/Modal";

function App() {

  // Estado para manejar el monto del presupuesto en toda la aplicacion
  const [presupuesto, setPresupuesto] = useState(0)
  // Estado para mostar el componente donde se administra el presupuesto, en caso de que este sea valido
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  // Estado para la ventana modal
  const [modal, setModal] = useState(false)


  // funcion para mostar la ventana modal
  const handleNuevoGasto = () => {
    setModal(true)
  }

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
              onClick={handleNuevoGasto} 
            />
        </div>
      )}

      {modal && 
        <Modal 
          setModal={setModal}
        />}
    </div>
  )

}

export default App;
