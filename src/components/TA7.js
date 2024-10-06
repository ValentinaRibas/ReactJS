import React, { useState } from 'react';

const TA7 = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleInputChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  const addTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  const deleteTarea = (indexToDelete) => {
    setTareas(tareas.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <h1>Listado de tareas:</h1>
      <ul>
        {tareas.map((task, index) => (
          <li key={index} style={{ padding: '10px' }}>
            {task}
            <button
              onClick={() => deleteTarea(index)}
              style={{ color: 'white', padding: '5px 10px' }}
            >
              Eliminar
            </button>
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
      <button onClick={addTarea} style={{ padding: '30px' }}>Agregar</button>
      
    </div>
  );
};

export default TA7;
