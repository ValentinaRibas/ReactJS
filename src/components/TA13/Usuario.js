import React, { useContext } from 'react';
import { Context } from './Context';

const Usuario = () => {
  const { nombreUsuario, updateNombreUsuario } = useContext(Context);

  const handleActualizacion = (event) => {
    updateNombreUsuario(event.target.value);
  };

  return (
    <div>
      <h2>{nombreUsuario}</h2>
      <input
        type="text"
        value={nombreUsuario}
        onChange={handleActualizacion}
        placeholder="Escribe tu nombre"
        style={{ margin: '10px' }}
      />
    </div>
  );
};

export default Usuario;
