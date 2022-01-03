import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

  const ocultarModal = () => {
    
    setAnimarModal(false)
    
    // Cambiar el estado de la animacion del formulario del Modal 
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  return (
    <div className="modal">

      <div className="cerrar-modal">
        <img 
          src={CerrarBtn} 
          alt="Cerrar Modal"
          onClick={ocultarModal} 
        />
      </div>

      {/* Agregar clases de Forma condicional */}
      <form className={`formulario ${animarModal ? "animar": "cerrar"}`}>

        <legend>Nuevo Gasto</legend>

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id='nombre'
            type="text"
            placeholder='Añade el Nombre del Gasto'
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id='cantidad'
            type="number"
            placeholder='Añade la cantidad del Gasto: ej. 300'
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select 
            id="categoria"
          >
            <option value="">-- Selecciones --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Sucripciones</option>
          </select>
        </div>

        <input 
          type="submit" 
          value="Añadir Gasto" 
        />


      </form>

    </div>
  )
}

export default Modal
