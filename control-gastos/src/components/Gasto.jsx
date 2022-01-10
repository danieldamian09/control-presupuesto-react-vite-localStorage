import { formatearFecha } from "../helpers";
// Iconos Gastos
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoCasa from "../img/icono_comida.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

// Creamos un diccionario de Iconos
const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones
};

const Gasto = ({ gasto }) => {
  // Destructuring para sacar las variables que necesitamos del objeto gasto
  const { nombre, cantidad, categoria, id, fecha } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        {/* Imagenes */}
        <img 
            src={diccionarioIconos[categoria]} 
            alt="iconos-gastos" 
        />
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">
            Agregado el: {""}
            <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">${cantidad}</p>
    </div>
  );
};

export default Gasto;
