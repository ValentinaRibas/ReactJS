import React, { createContext, useState } from 'react';

export const ContextoIdioma = createContext();

export const IdiomaProvider = ({ children }) => {
  const [idioma, setIdioma] = useState('es');

  const toggleIdioma = () => {
    setIdioma((idiomaActual) => (idiomaActual === 'es' ? 'en' : 'es'));
  };

  return (
    <ContextoIdioma.Provider value={{ idioma, toggleIdioma }}>
      {children}
    </ContextoIdioma.Provider>
  );
};
