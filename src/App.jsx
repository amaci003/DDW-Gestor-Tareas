import { useState } from "react";
import { FaTrashAlt, FaCheck, FaSearch } from "react-icons/fa";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const agregarTarea = () => {
    if (texto.trim() !== "") {
      setTareas([...tareas, { texto, completada: false }]);
      setTexto("");
    }
  };

  const eliminarTarea = (index) => {
    const nuevas = [...tareas];
    nuevas.splice(index, 1);
    setTareas(nuevas);
  };

  const toggleCompletada = (index) => {
    const nuevas = [...tareas];
    nuevas[index].completada = !nuevas[index].completada;
    setTareas(nuevas);
  };

  const tareasFiltradas = tareas.filter((t) =>
    t.texto.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Mi Lista de Tareas </h1>

      <div className="buscador">
        
        <input
          type="text"
          placeholder="Buscar tarea..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          
        />

        <FaSearch />
      </div>

      <div className="input-tarea">
        <input
          type="text"
          placeholder="Escribí una tarea "
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <ul className="lista-tareas">
        {tareasFiltradas.map((tarea, index) => (
          <li key={index} className={tarea.completada ? "completada" : ""}>
            <span onClick={() => toggleCompletada(index)}>{tarea.texto}</span>
            <div className="botones">
              <button onClick={() => toggleCompletada(index)}>
                <FaCheck />
              </button>
              <button onClick={() => eliminarTarea(index)}>
                <FaTrashAlt />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
