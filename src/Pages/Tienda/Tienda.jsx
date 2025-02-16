import React, { useContext } from 'react';
import { PizzaContext } from '../../Context/PizzaContext'; // Asegúrate de que la ruta sea correcta
import CardPizza from '../../components/CardPizza/CardPizza'; // Asegúrate de que la ruta sea correcta
import './tienda.css'


const Tienda = () => {
  const { pizzas } = useContext(PizzaContext); // Obtén las pizzas del contexto

  return (
    <div className="tienda-container">
      <h1>Nuestra Tienda de Pizzas</h1>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} /> // Pasa cada pizza como prop a CardPizza
        ))}
      </div>
    </div>
  );
};

export default Tienda;