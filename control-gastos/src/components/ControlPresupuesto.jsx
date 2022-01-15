import React, { useState ,useEffect } from 'react'
import { CircularProgressbar}  from 'react-circular-progressbar'
// Hoja de estilos del Progressbar
import "react-circular-progressbar/dist/styles.css"


const ControlPresupuesto = ({presupuesto, gastos}) => {

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

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">

      <div>
        <CircularProgressbar 
            value={porcentaje}
        />
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
        </p>
        <p>
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
