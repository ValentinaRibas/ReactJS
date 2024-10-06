import React, { useState } from 'react';

const TA6 = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleInputChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  const addTask = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <h1>Listado de tareas:</h1>
      <ul>
        {tareas.map((task, index) => (
          <li key={index} style={{ padding: '10px' }}>
            {task}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={nuevaTarea}
        onChange={handleInputChange}
        placeholder="Ingrese una tarea"
        style={{ padding: '10px' }}
      />
      <button onClick={addTask} style={{ padding: '30px' }}>Agregar</button>
      
    </div>
  );
};

export default TA6;
