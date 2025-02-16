import React from 'react';
import { usePedidos } from '../../Context/PedidosContext';

const MisCompras = () => {
  const { pedidos } = usePedidos();

  return (
    <div className="ultimos-pedidos">
      <h2>Últimos pedidos realizados</h2>
      {pedidos.length === 0 ? (
        <p>No hay pedidos recientes.</p>
      ) : (
        pedidos.slice(0, 3).map((pedido, index) => (
          <div key={index} className="pedido-item">
            <h3>Pedido {index + 1}</h3>
            {pedido.fecha && <p>Fecha: {pedido.fecha}</p>}
            <p>Nombre: {pedido.nombre} {pedido.apellido}</p>
            <p>Dirección: {pedido.direccion}</p>
            <p>Productos:</p>
            <ul>
              {pedido.cart.map((item) => (
                <li key={item.id}>
                  {item.name} - Cantidad: {item.quantity} - Precio: ${item.price}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default MisCompras;