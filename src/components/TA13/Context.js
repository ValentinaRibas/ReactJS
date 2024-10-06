import React, { createContext, useState } from 'react';

export const Context = createContext();

export const UserProvider = ({ children }) => {
  const [nombreUsuario, setNombreUsuario] = useState('Juan Pérez');

  const updateNombreUsuario = (newName) => {
    setNombreUsuario(newName);
  };

  return (
    <Context.Provider value={{nombreUsuario, updateNombreUsuario}}>
      {children}
    </Context.Provider>
  );
};
