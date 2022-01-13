import { useState, useEffect } from 'react'
import CerrarBtn from '../img/cerrar.svg'
// importo mi componente de mensaje
import Mensaje from './Mensaje'

const Modal = ({
  setModal, 
  animarModal, 
  setAnimarModal, 
  guardarGasto, 
  gastoEditar
}) => {

  // Estado para el mensaje de Error
  const [mensaje, setMensaje] = useState('')

  // Estados para guardar la informacion de los campos del formulario
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')

  useEffect(() => {
    if(Object.keys(gastoEditar).length){
      // console.log("Listo para Editar")
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
    }
  }, [])

  const ocultarModal = () => {
    
    setAnimarModal(false)
    
    // Cambiar el estado de la animacion del formulario del Modal 
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  // Validaciones del Formulario al hacer Submit
  const handleSubmit = e => {

    e.preventDefault()

    // Validacion
    // console.log("Enviando.......")
    if([nombre, cantidad, categoria].includes('')){
      // console.log("Fallo la validacion....")
      setMensaje('Todos los campos son obligatorios')

      // *Esperamos unos segundos para quitar el mensaje de los campos
      setTimeout(() => {
        setMensaje('')
      }, 3000)

      return
    }

    // En caso de pasar la validacion guardo el gasto
    guardarGasto({
      nombre,
      cantidad,
      categoria
    })

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
      <form 
        className={`formulario ${animarModal ? "animar": "cerrar"}`}
        onSubmit={handleSubmit}
        >

        <legend>Nuevo Gasto</legend>

        {/* Mensaje de Error en caso de que los campos este vacios */}
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}


        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id='nombre'
            type="text"
            placeholder='Añade el Nombre del Gasto'
            value={nombre}
            onChange={ e => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id='cantidad'
            type="number"
            placeholder='Añade la cantidad del Gasto: ej. 300'
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select 
            id="categoria"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
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
