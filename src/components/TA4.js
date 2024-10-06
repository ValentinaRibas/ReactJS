import React, { useState } from 'react';

const TA4 = () => {
  const [contador, setContador] = useState(0);

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

export default TA4;
