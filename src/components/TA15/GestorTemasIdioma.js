import React, { useContext } from 'react';
import { ContextoTema } from './ContextoTema';
import { ContextoIdioma } from './ContextoIdioma';

const GestorTemasIdioma = () => {
  const { tema, toggleTema } = useContext(ContextoTema);
  const { idioma, toggleIdioma } = useContext(ContextoIdioma);

  const temas = {
    claro: {
      backgroundColor: '#FFFF',
      color: '#3333',
      padding: '20px',
      width: '500px',
    },
    oscuro: {
      backgroundColor: '#3333',
      color: '#FFFFF',
      padding: '20px',
      width: '500px',
    }
  };

  const textoIdiomas = idioma === 'es' ? 'Hola mundo!' : 'Hello world!';

  return (
    <div style={{ textAlign: 'center', display: 'flex', direction: 'column', align: 'center' }}>
      <div style={tema === 'claro' ? temas.claro : temas.oscuro}>
        <p>{textoIdiomas}</p>
      </div>

      <button
        onClick={toggleTema}
        style={{
          padding: '10px',
          marginTop: '10px',
        }}
      >
        Cambiar a {tema === 'claro' ? 'Oscuro' : 'Claro'}
      </button>
      <button
        onClick={toggleIdioma}
        style={{
          padding: '10px',
          marginTop: '10px',
        }}
      >
        Cambiar a {idioma === 'es' ? 'Inglés' : 'Español'}
      </button>
    </div>
  );
};

export default GestorTemasIdioma;
