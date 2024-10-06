import React, { createContext, useState } from 'react';

export const ContextoTema = createContext();

export const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState('claro');

  const toggleTema = () => {
    setTema((temaActual) => (temaActual === 'claro' ? 'oscuro' : 'claro'));
  };

  return (
    <ContextoTema.Provider value={{ tema, toggleTema }}>
      {children}
    </ContextoTema.Provider>
  );
};
