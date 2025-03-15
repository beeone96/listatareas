import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const FormularioTareas = ({ tareas, setTareas }) => {
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
    setNuevaTarea("");
  };

  return (
    <div className="formulario">
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        className="texto-introducir"
      />
      <button onClick={agregarTarea} className="agregar">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default FormularioTareas;