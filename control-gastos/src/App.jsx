import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
// funcion para generar el id desde la carpeta de helpers
import { generarID } from "./helpers";
// Icono de nuevos gastos
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  // Estado para manejar el monto del presupuesto en toda la aplicacion
  const [presupuesto, setPresupuesto] = useState(0);
  // Estado para mostar el componente donde se administra el presupuesto, en caso de que este sea valido
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  // Estado para la ventana modal
  const [modal, setModal] = useState(false);
  // Estado para animar el formulario que aparece en el Modal con una clase del CSS
  const [animarModal, setAnimarModal] = useState(false);
  // Estado para guardar los gastos
  const [gastos, setGastos] = useState([]);
  // Estado para Editar el gasto que se va a cambiar y guardarlo en el Modal
  const [gastoEditar, setGastoEditar] = useState({});

  // Escuchar los cambios que sucedan cuando quiero editar un gasto
  useEffect(() => {
    if (Object.keys(gastoEditar).length) {
      // console.log("Listo para Editar")
      setModal(true);

      // Animar el Modal
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  // funcion para mostar la ventana modal
  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({}); 

    // Animar el Modal
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  //* Funcion para guardar el gasto
  const guardarGasto = gasto => {
    // ! Actualizar o agregar un nuevo gasto
    if (gasto.id) {
      //? Actualizar
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados);
    } else {
      //? Nuevo Gasto
      // Asigno el Id con la funcion que exporte
      gasto.id = generarID();
      // Guardar la fecha de cuando se creo el gasto
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    //! Ocultar el Modal una vez agregamos un gasto
    setAnimarModal(false);
    // Cambiar el estado de la animacion del formulario del Modal
    setTimeout(() => {
      setModal(false);
    }, 500);

  };

  //* Funcion para eliminar el gasto
  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    // console.log(gastosActualizados)
    setGastos(gastosActualizados)
  }

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos 
              gastos={gastos} 
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
        />
      )}
    </div>
  );
}

export default App;
