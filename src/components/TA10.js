import React, { useState, useEffect } from 'react';

const TA10 = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  return (
    <div style={{ marginTop: '50px' }}>
      <h1>Lista de usuarios:</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {usuarios.map((user) => (
            <li key={user.id} style={{ padding: '10px'}}>
              <h2><strong>Nombre:</strong> {user.name}</h2>
              <p><strong>Email:</strong> {user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TA10;
