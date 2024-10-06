import React, { createContext, useState } from 'react';

export const Context = createContext();

export const UserProvider = ({ children }) => {
  const [nombreUsuario, setNombreUsuario] = useState('Juan Pérez');

  return (
    <Context.Provider value={nombreUsuario}>
      {children}
    </Context.Provider>
  );
};
