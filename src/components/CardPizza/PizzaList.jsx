import React, { useState, useEffect } from 'react';
import CardPizza from './CardPizza'; // Importa el componente CardPizza
import products from '../../assets/mocks/products.json'; // Importa el archivo JSON

const PizzaList = () => {
  // Estado inicial de las pizzas, cargado desde el archivo JSON
  const [pizzas, setPizzas] = useState([]);

  // Cargar los datos del JSON al montar el componente
  useEffect(() => {
    setPizzas(products); // Inicializa el estado con los datos del JSON
  }, []);

  // Función para manejar el cambio de favoritos
  const handleToggleFavorite = (pizzaId) => {
    console.log('Toggling favorite for pizza:', pizzaId); // Debugging
    setPizzas((prevPizzas) =>
      prevPizzas.map((pizza) =>
        pizza.id === pizzaId ? { ...pizza, isFavorite: !pizza.isFavorite } : pizza
      )
    );
  };

  return (
    <div>
      {/* Mapea las pizzas y renderiza un CardPizza para cada una */}
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          pizza={pizza}
          onToggleFavorite={handleToggleFavorite} // Pasa la función como prop
        />
      ))}
    </div>
  );
};

export default PizzaList;