import React, { useContext } from 'react';
import { Context } from './Context';

const temas = {
  claro: {
    width: '500px',
    backgroundColor: '#FFFF',
    color: '#3333',
    padding: '20px',
  },
  oscuro: {
    width: '500px',
    backgroundColor: '#3333',
    color: '#FFFF',
    padding: '20px',
  }
};

const GestorTemas = () => {
  const { tema, toggleTema } = useContext(Context);

  return (
    <div style={{ textAlign: 'center', display: 'flex', direction: 'column', align: 'center' }}>
      <div style={tema === 'claro' ? temas.claro : temas.oscuro}>
        <p>Hola mundo!</p>
      </div>
      <button
        onClick={toggleTema}
        style={{
          padding: '10px',
          backgroundColor: tema === 'claro' ? '#3333' : '#FFFF',
          color: tema === 'claro' ? '#FFFF' : '#3333',
        }}
      >
        Cambiar a {tema === 'claro' ? 'Oscuro' : 'Claro'}
      </button>
    </div>
  );
};

export default GestorTemas;
