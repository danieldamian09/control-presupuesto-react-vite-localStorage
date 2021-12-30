import React, { useState } from 'react';
import Mensaje from './Mensaje';


const NuevoPresupuesto = ( {presupuesto, setPresupuesto, setIsValidPresupuesto} ) => {

    // Estado para el mensaje cuando el presupuesto no es valido o es menor a cero
    const [mensaje, setMensaje] = useState("")


    // Validar campo del preupuesto que no sea un string o monto menor a cero
    const handlePresupuesto = (e) => {
        e.preventDefault();
        if(!presupuesto || presupuesto < 0){
            setMensaje("No es un Presupuesto Valido")
            return
        }

        setMensaje("")
        setIsValidPresupuesto(true);

    }


  return (
    <div className="contenedor-presopuesto contendor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
              className="nuevo-presupuesto"
              type="number"
              placeholder="Añade tu Presupuesto"
              value={presupuesto}
              // creamos el evento (onChange) que lee el input el cual es un callback para actualizar el state
              onChange={ e => setPresupuesto(Number(e.target.value)) }
          />
        </div>
        <input type="submit" value="Añadir" />
        {/* Mensaje en caso de que el monto no pase la validacion */}
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
