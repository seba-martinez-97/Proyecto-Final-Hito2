import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzaContext } from '../../Context/PizzaContext';
import { CartContext } from '../../Context/CartContext';
import { formatNumber } from '../../assets/js/utils';
import './pizza.css';

const Pizza = () => {
    const { id } = useParams();
    const { pizzas } = useContext(PizzaContext);
    const { agregarProducto } = useContext(CartContext);

    const pizza = pizzas.find(p => p.id === id);

    if (!pizza) {
        return <div>Pizza no encontrada</div>;
    }

    return (
        <div className="pizza-detail">
            <img src={pizza.img} className="pizza-image" alt={pizza.name} />
            <div className="pizza-info">
                <h2>{pizza.name}</h2>
                <hr />
                <p>
                    <strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}
                </p>
                <hr />
                <p>
                    <strong>Descripción:</strong> {pizza.desc}
                </p>
                <hr />
                <p>
                    <strong>Precio:</strong> {formatNumber(pizza.price)}
                </p>
                <div className="actions">
                    <button className="btn btn-primary" onClick={() => agregarProducto(pizza)}>
                        <i className="fa-solid fa-cart-shopping"></i> Añadir al carrito
                    </button>
                </div>
                <div className="seller-info">
                    <strong>Vendedor:</strong> {pizza.createdBy}
                </div>
            </div>
        </div>
    );
};

export default Pizza;


















/*
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'; // Elimina useNavigate, no es necesario aquí
import { PizzaContext } from '../../Context/PizzaContext'; // Asegúrate de que esta ruta sea correcta
import { CartContext } from '../../Context/CartContext'; // Asegúrate de que esta ruta sea correcta
import { formatNumber } from '../../assets/js/utils'; // Asegúrate de que esta ruta sea correcta
import './pizza.css'; // Cambia el nombre del archivo CSS si es necesario

const Pizza = () => {
    const { id } = useParams(); // Obtiene el id de la pizza desde la URL
    const { pizzas } = useContext(PizzaContext); // Obtiene las pizzas del contexto
    const { agregarProducto } = useContext(CartContext); // Obtiene la función para agregar productos al carrito

    // Busca la pizza correspondiente al id
    const pizza = pizzas.find(p => p.id === id);

    // Si no se encuentra la pizza, muestra un mensaje
    if (!pizza) {
        return <div>Pizza no encontrada</div>;
    }

    return (
        <div className="pizza-detail">
            <img src={pizza.img} className="pizza-image" alt={pizza.name} />
            <div className="pizza-info">
                <h2>{pizza.name}</h2>
                <hr />
                <p>
                    <strong>Ingredientes:</strong>
                </p>
                <ul>
                    {pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <hr />
                <p>
                    <strong>Descripción:</strong> {pizza.desc}
                </p>
                <hr />
                <p>
                    <strong>Precio:</strong> ${formatNumber(pizza.price)}
                </p>
                <div className="actions">
                    <button className="btn btn-primary" onClick={() => agregarProducto(pizza)}>
                        <i className="fa-solid fa-cart-shopping"></i> Añadir al carrito
                    </button>
                </div>
                <div className="seller-info">
                    <strong>Vendedor:</strong> {pizza.createdBy}
                </div>
            </div>
        </div>
    );
};

export default Pizza;
*/