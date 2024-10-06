import React, { useState } from 'react';

const TA8 = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [indiceTareaEditar, setIndiceTareaEditar] = useState(null);
  const [tareaEditada, setTareaEditada] = useState('');

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

  const editar = (index) => {
    setIndiceTareaEditar(index);
    setTareaEditada(tareas[index]);
  };

  const handleEditar = (event) => {
    setTareaEditada(event.target.value);
  };

  const saveTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index] = tareaEditada;
    setTareas(nuevasTareas);
    setIndiceTareaEditar(null);
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <h1>Listado de tareas:</h1>
      <ul>
        {tareas.map((task, index) => (
          <li key={index} style={{ padding: '10px' }}>
            {indiceTareaEditar === index ? (
              <>
                <input
                  type="text"
                  value={tareaEditada}
                  onChange={handleEditar}
                  style={{ padding: '5px', marginRight: '10px', flexGrow: 1 }}
                />
                <button
                  onClick={() => saveTarea(index)}
                  style={{
                    padding: '10px',
                    marginRight: '10px'
                  }}
                >
                  Guardar
                </button>
              </>
            ) : (
              <>
                {task}
                  <button
                    onClick={() => editar(index)}
                    style={{ padding: '10px', marginRight: '10px' }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteTarea(index)}
                    style={{ color: 'white', padding: '5px 10px' }}
                  >       
                    Eliminar
                  </button>
              </>
            )}
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

export default TA8;
