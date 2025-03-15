import React, { useState } from "react";
import Header from "./componentes/Header";
import FormularioTareas from "./componentes/FormularioTareas";
import ListaTareas from "./componentes/ListaTareas";
import "./App.css";

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [mostrarCompletadas, setMostrarCompletadas] = useState(true);

  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        setMostrarCompletadas={setMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} setTareas={setTareas} />
      <ListaTareas tareas={tareas} setTareas={setTareas} mostrarCompletadas={mostrarCompletadas} />
    </div>
  );
};

export default App;