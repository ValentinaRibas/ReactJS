import React, { useState, useEffect } from 'react';

const TA11 = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{segundos} segundos</h2>
    </div>
  );
};

export default TA11;
