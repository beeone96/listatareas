import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Tarea = ({ tarea, index, tareas, setTareas }) => {
  const [editando, setEditando] = useState(false);
  const [textoEditado, setTextoEditado] = useState(tarea.texto);

  const eliminarTarea = () => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  const actualizarTarea = () => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = textoEditado;
    setTareas(nuevasTareas);
    setEditando(false);
  };

  const marcarCompletada = () => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  return (
    <li className={tarea.completada ? "completada" : ""}>
      <input type="checkbox" checked={tarea.completada} onChange={marcarCompletada} className="checkbox" />
      {editando ? (
        <input type="text" value={textoEditado} onChange={(e) => setTextoEditado(e.target.value)} />
      ) : (
        <span className="tarea-texto">{tarea.texto}</span>
      )}
      {editando ? (
        <button onClick={actualizarTarea} className="actualizar">Actualizar</button>
      ) : (
        <>
          <button onClick={() => setEditando(true)} className="editar">
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={eliminarTarea} className="eliminar">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      )}
    </li>
  );
};

export default Tarea;