import React from 'react';
import { useCart } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../../assets/js/utils';
import './Cart.css';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    calculateSubtotal,
    calculateTotal,
    clearCart, // Añade clearCart desde el contexto
  } = useCart();

  const navigate = useNavigate();

  const generateOrderNumber = () => {
    return `PEDIDO-${Math.floor(Math.random() * 1000000)}`;
  };

  const handleFinalizarCompra = () => {
    clearCart(); // Vacía el carrito
    navigate('/formulario-compra', { state: { cart } }); // Redirige al formulario de compra
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Carrito de Compras</h1>
      <div className="row">
        <div className="col-md-9">
          {cart.length === 0 ? (
            <div className="alert alert-info" role="alert">
              Tu carrito está vacío.
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="card mb-3 cart-card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.img}
                      className="img-fluid rounded-start"
                      alt={item.name}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                        <strong>Precio:</strong> {formatNumber(item.price)}
                      </p>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => decrementQuantity(item.id)}
                        >
                          -
                        </button>
                        <span className="mx-3">{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => incrementQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="btn btn-danger btn-sm mt-3"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="col-md-3">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title mb-0">Resumen de la Compra</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                <strong>Número de Pedido:</strong> {generateOrderNumber()}
              </p>
              <hr />

              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Pizza</th>
                      <th>Cantidad</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{formatNumber(calculateSubtotal(item))}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <hr />
              <p className="card-text">
                <strong>Total General:</strong> {formatNumber(calculateTotal())}
              </p>

              <button
                className="btn btn-success w-100 mt-3"
                disabled={cart.length === 0}
                onClick={handleFinalizarCompra}
              >
                Ir a Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;