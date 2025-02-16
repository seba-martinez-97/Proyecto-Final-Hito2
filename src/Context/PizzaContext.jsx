import React, { createContext, useState, useEffect } from 'react';
import products from '../assets/mocks/products.json';

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Simulamos una carga asíncrona de los datos
    setPizzas(products);
  }, []);

  // Función para agregar una nueva pizza
  const addPizza = (newPizza) => {
    setPizzas((prevPizzas) => [...prevPizzas, newPizza]);
  };

  // Función para actualizar una pizza existente
  const updatePizza = (id, updatedPizza) => {
    setPizzas((prevPizzas) =>
      prevPizzas.map((pizza) =>
        pizza.id === id ? { ...pizza, ...updatedPizza } : pizza
      )
    );
  };

  // Función para eliminar una pizza
  const deletePizza = (id) => {
    setPizzas((prevPizzas) => prevPizzas.filter((pizza) => pizza.id !== id));
  };

  return (
    <PizzaContext.Provider value={{ pizzas, addPizza, updatePizza, deletePizza }}>
      {children}
    </PizzaContext.Provider>
  );
};