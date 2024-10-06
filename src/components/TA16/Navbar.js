import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ margin: '10px' }}>Inicio</Link>
      <Link to="/about" style={{ margin: '10px' }}>Acerca de</Link>
      <Link to="/contact" style={{ margin: '10px' }}>Contacto</Link>
    </nav>
  );
};

export default Navbar;
