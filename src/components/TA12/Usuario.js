import React, { useContext } from 'react';
import { Context } from './context';

const Usuario = () => {
  const nombreUsuario = useContext(Context);

  return (
    <div>
      <h2>{nombreUsuario}</h2>
    </div>
  );
};

export default Usuario;
