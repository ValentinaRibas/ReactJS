import React, { useState, useEffect } from 'react';

const TA9 = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const disminuir = () => {
    setContador(contador - 1);
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar} style={{ padding: '20px' }}>+</button>
      <button onClick={disminuir} style={{ padding: '20px' }}>-</button>
    </div>
  );
};

export default TA9;
