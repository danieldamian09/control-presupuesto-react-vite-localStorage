
const Gasto = ({gasto}) => {
  return (
    <div>
      <p>{gasto.nombre}</p>
      <p>{gasto.cantidad}</p>
      <p>{gasto.categoria}</p>
    </div>
  )
}

export default Gasto
