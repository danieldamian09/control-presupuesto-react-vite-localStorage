const NuevoPresupuesto = ( {presupuesto, setPresupuesto} ) => {
  return (
    <div className="contenedor-presopuesto contendor sombra">
      <form className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
              className="nuevo-presupuesto"
              type="text"
              placeholder="Añade tu Presupuesto"
              value={presupuesto}
              // creamos el evento (onChange) que lee el input el cual es un callback para actualizar el state
              onChange={ e => setPresupuesto(e.target.value) }
          />
        </div>
        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
