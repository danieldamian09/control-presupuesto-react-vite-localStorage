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
  // Estado para animar el formulario que aparece en el Modal con una clase del CSS
  const [animarModal, setAnimarModal] = useState(false)
  // Estado para guardar los gastos
  const [gasto, setGasto] = useState([])


  // funcion para mostar la ventana modal
  const handleNuevoGasto = () => {
    setModal(true)

    // Animar el Modal
    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  
  }

   // Funcion para guardar el gasto
    const guardarGasto = gasto => {
    setGasto(gasto)
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
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />}
    </div>
  )

}

export default App;
