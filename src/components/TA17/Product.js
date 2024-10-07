import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: '1', nombre: 'Producto1', precio: 100 },
  { id: '2', nombre: 'Producto2', precio: 200 },
  { id: '3', nombre: 'Producto3', precio: 300 },
];

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  return (
    <>
    {product && (
        <div style={{ marginTop: '20px' }}>
            <h2>{product.nombre}</h2>
            <p>Precio: ${product.precio}</p>
        </div>
    )}
    {!product && (
        <h2>No se ha encontrado el producto</h2>
    )}
    </>
  );
};

export default Product;
