import React, { createContext, useState } from 'react';

export const Context = createContext();

export const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState('claro');

  const toggleTema = () => {
    setTema((temaActual) => (temaActual === 'claro' ? 'oscuro' : 'claro'));
  };

  return (
    <Context.Provider value={{ tema, toggleTema }}>
      {children}
    </Context.Provider>
  );
};
