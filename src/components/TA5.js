import React, { useState } from 'react';

const TA5 = () => {
  const [esVisible, setEsVisible] = useState(false);

  const toggleText = () => {
    setEsVisible(!esVisible);
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <button onClick={toggleText}>
        {esVisible ? 'Ocultar Texto' : 'Mostrar Texto'}
      </button>
      {esVisible && <p>Hola mundo!</p>}
    </div>
  );
};

export default TA5;
