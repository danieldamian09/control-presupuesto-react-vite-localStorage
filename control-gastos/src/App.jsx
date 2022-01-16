import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import Filtros from "./components/Filtros";
// funcion para generar el id desde la carpeta de helpers
import { generarID } from "./helpers";
// Icono de nuevos gastos
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {

  // Estado para guardar los gastos
  //? "localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []"  Obtener lo que esta en localStorage de gastos, en caso de no haber nada se coloca un array vacio
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );

  // Estado para manejar el monto del presupuesto en toda la aplicacion
  //? "Number(localStorage.getItem('presupuesto')) ?? 0" para colocar en el estado lo que este en localStorage
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );

  // Estado para mostar el componente donde se administra el presupuesto, en caso de que este sea valido
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  // Estado para la ventana modal
  const [modal, setModal] = useState(false);

  // Estado para animar el formulario que aparece en el Modal con una clase del CSS
  const [animarModal, setAnimarModal] = useState(false);

  // Estado para Editar el gasto que se va a cambiar y guardarlo en el Modal
  const [gastoEditar, setGastoEditar] = useState({});

  // Estado para filtar los gastos
  const [filtro, setFiltro] = useState('') 


  //! useEffect  Escuchar los cambios que sucedan cuando quiero editar un gasto
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

  //! useEffect Guardar en localStorage el presupuesto
  useEffect(() => {
    
    localStorage.setItem('presupuesto', presupuesto ?? 0)
    
  }, [presupuesto])


  //! useEffectGuardar en localStorage los gastos
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])


  //! useEffect No mostar el monto en la pantalla inicial cuando el valor que esta en localStorage es mayor a 0 (se ejecuta solo una vez)
  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;

    if(presupuestoLS > 0){
      setIsValidPresupuesto(true)
    }

  }, [])

  //! useEffect Escuchar los cambios que sucedan en filtro
  useEffect(() => {
    if(filtro){
      //? Filtrar gastos por categoria
      
    }
  }, [filtro])
  


  //* funcion para mostar la ventana modal
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
      // Limpiar el state
      setGastoEditar({})
    } else {
      //? Nuevo Gasto
      // Asigno el Id con la funcion que exporte
      gasto.id = generarID();
      // Guardar la fecha de cuando se creo el gasto
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    //* Ocultar el Modal una vez agregamos un gasto
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
            <Filtros 
              filtro={filtro}
              setFiltro={setFiltro}
            />
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
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
