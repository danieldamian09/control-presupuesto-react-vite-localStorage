import {formatearFecha } from '../helpers'

const Gasto = ({gasto}) => {

  // Destructuring para sacar las variables que necesitamos del objeto gasto
  const {nombre, cantidad, categoria, id, fecha} = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
            <p className="categoria">{categoria}</p>
            <p className="nombre-gasto">{nombre}</p>
            <p className="fecha-gasto">
              Agregado el: {''}
              <span>{formatearFecha(fecha)}</span>
            </p>
        </div>
      </div>
      <p className='cantidad-gasto'>${cantidad}</p>
    </div>
  )
}

export default Gasto
