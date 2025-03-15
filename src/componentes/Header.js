import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Header = ({ mostrarCompletadas, setMostrarCompletadas }) => {
  return (
    <div className="header">
      <h2>Lista de Tareas</h2>
      <button className="filtro" onClick={() => setMostrarCompletadas(!mostrarCompletadas)}>
        {mostrarCompletadas ? "No mostrar completadas" : "Mostrar completadas"}
        <FontAwesomeIcon icon={mostrarCompletadas ? faEyeSlash : faEye} className="visor" />
      </button>
    </div>
  );
};

export default Header;