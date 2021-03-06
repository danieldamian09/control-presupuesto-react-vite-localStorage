import React, { useState ,useEffect } from 'react'
import { CircularProgressbar, buildStyles}  from 'react-circular-progressbar'
// Hoja de estilos del Progressbar
import "react-circular-progressbar/dist/styles.css"


const ControlPresupuesto = ({
  gastos,
  setGastos,
  presupuesto, 
  setPresupuesto,
  setIsValidPresupuesto
}) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  // Estado para el porcentaje de la grafica segun las operaciones que se van realizando
  const [porcentaje, setPorcentaje] = useState(0)


  useEffect(() => {

    const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0);
    // console.log(totalGastado)

    const totalDisponible = presupuesto - totalGastado;

    //? Calcular el porcentaje gastado
    const nuevoPorcentaje =  (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
    // Actualizamos el porcentaje en la grafica por medio del state (agrgamos un setTimeOut para poder ver la animacion)
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 1500);

    setDisponible(totalDisponible)
    setGastado(totalGastado)

  }, [gastos])

  // Formatear a Moneda
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  // Reserear la App
  const handleRestApp = () => {
    // Confirmar si el usuario desea resetear la App
    const resultado = confirm("Deseas reiniciar el presupuesto y gastos?");
    // Reseteamos segun la confirmacion
    if(resultado){
        setGastos([])
        setPresupuesto(0)
        setIsValidPresupuesto(false)
    }
  }
 
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">

      <div>
        <CircularProgressbar
            styles={buildStyles({
                pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                trailColor: '#F5F5F5',
                textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6'
            })}
            value={porcentaje}
            text={`${porcentaje}% Gastado`}
        />
      </div>

      <div className="contenido-presupuesto">

        <button
          className='reset-app'
          type='button'
          onClick={handleRestApp}
        >
          Resetear App
        </button>

        <p>
          <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
          <span>Disponible: </span>{formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span>{formatearCantidad(gastado)}
        </p>
      </div>
      
    </div>
  )
}

export default ControlPresupuesto
