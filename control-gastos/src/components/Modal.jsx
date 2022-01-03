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
      </form>

    </div>
  )
}

export default Modal
