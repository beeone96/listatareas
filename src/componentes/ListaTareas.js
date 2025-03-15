import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ tareas, setTareas, mostrarCompletadas }) => {
  return (
    <ul className="lista-tareas">
      {tareas.length === 0 ? (
        <li className="notareas">No hay tareas en la lista.</li>
      ) : (
        tareas
          .filter((tarea) => mostrarCompletadas || !tarea.completada)
          .map((tarea, index) => (
            <Tarea key={index} tarea={tarea} index={index} tareas={tareas} setTareas={setTareas} />
          ))
      )}
    </ul>
  );
};

export default ListaTareas;