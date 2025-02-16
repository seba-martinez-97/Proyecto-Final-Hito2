import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../../assets/js/utils';
import { useCart } from '../../Context/CartContext';
import './cardpizza.css';

const CardPizza = ({ pizza, onToggleFavorite }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/pizza/${pizza.id}`);
  };

  return (
    <div className="card">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h4 className="card-title">{pizza.name}</h4>
        <hr />
        <p className="card-text">
          <strong>Precio: {formatNumber(pizza.price)}</strong>
        </p>
        <div className="mt-auto d-flex justify-content-around gap-2">
          <button className="btn btn-outline-success col-5" onClick={handleViewMore}>
            <i className="fa-solid fa-eye"></i> Ver más
          </button>
          <button
            className="btn btn-outline-success col-5"
            onClick={() => addToCart(pizza)}
          >
            <i className="fa-solid fa-cart-shopping"></i> Añadir
          </button>
        </div>
        <div className="mt-3 text-center">
          <strong>Vendedor:</strong> {pizza.createdBy}
        </div>
        {/* Botón de favoritos */}
        <button 
          className={`favorite-button btn btn-outline-success ${pizza.isFavorite ? 'favorited' : ''}`}
          onClick={() => onToggleFavorite(pizza.id)}
        >
          {pizza.isFavorite ? (
            <i className="fa-solid fa-heart" style={{ color: 'red' }}></i> // Corazón rojo
          ) : (
            <i className="fa-regular fa-heart"></i> // Corazón vacío
          )}
          {pizza.isFavorite ? ' Quitar de favoritos' : ' Agregar a favoritos'}
        </button>
      </div>
    </div>
  );
};

export default CardPizza;