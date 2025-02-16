import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { usePedidos } from '../../Context/PedidosContext'; // Asegúrate de importar el contexto
import './Formulario.css';

const FormularioCompra = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [cvv, setCvv] = useState('');
  const [pedidoConfirmado, setPedidoConfirmado] = useState(false);
  const location = useLocation();
  const { agregarPedido } = usePedidos(); // Usar el contexto

  const { cart } = location.state || { cart: [] };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoPedido = {
      nombre,
      apellido,
      direccion,
      numeroTarjeta,
      fechaVencimiento,
      cvv,
      productos: cart.map(item => ({
        nombre: item.name,
        cantidad: item.quantity,
        precio: item.price
      })),
      fecha: new Date().toLocaleString(), // Agregar fecha y hora del pedido
    };

    // Guardar el pedido en el contexto
    agregarPedido(nuevoPedido);

    // Simular el envío de los datos y confirmar el pedido
    setPedidoConfirmado(true);
  };

  return (
    <div className="formulario-compra">
      <h2>Confirmar Pedido</h2>

      <div className="productos-carrito">
        <h3>Productos en el Carrito</h3>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="producto-item">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price}</p>
            </div>
          ))
        )}
      </div>

      {pedidoConfirmado ? (
        <div className="confirmacion-pedido">
          <h3>¡Pedido Confirmado!</h3>
          <p>Gracias por tu compra, {nombre} {apellido}.</p>
          <p>Tu pedido ha sido procesado y será enviado a la dirección: {direccion}.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Apellido:</label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Dirección:</label>
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Número de Tarjeta:</label>
            <input
              type="text"
              value={numeroTarjeta}
              onChange={(e) => setNumeroTarjeta(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Fecha de Vencimiento:</label>
            <input
              type="text"
              value={fechaVencimiento}
              onChange={(e) => setFechaVencimiento(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>CVV:</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
          <button type="submit">Confirmar Pedido</button>
        </form>
      )}
    </div>
  );
};

export default FormularioCompra;