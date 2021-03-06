import { formatearFecha } from "../helpers";
// Libreria para deslizar el componente de gastos (Eliminar o Modificar)
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from "react-swipeable-list";
// Hoja de estilos para deslizar el componente de gastos (Eliminar o Modificar)
import "react-swipeable-list/dist/styles.css"

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

// Componente
const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
  // Destructuring para sacar las variables que necesitamos del objeto gasto
  const { nombre, cantidad, categoria, id, fecha } = gasto;

  // Componentes para realizar la animacion Swipe(libreria)
  const leadingActions = () => (
      <LeadingActions>
        <SwipeAction onClick={() => setGastoEditar(gasto)}>
          Editar
        </SwipeAction>
      </LeadingActions>
  )

  // ? destructive : ayuda a que la transicion al eliminar un gasto no sea tan brusca
  const trailingActions = () => (
    <TrailingActions>
    <SwipeAction 
        onClick={() => eliminarGasto(id)}
        destructive={true}
    >
      Eliminar
    </SwipeAction>
  </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}
      >
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
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
