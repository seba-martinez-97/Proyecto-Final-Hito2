import React, { useState, useContext } from 'react';
import { PizzaContext } from '../../Context/PizzaContext';

const Admin = () => {
  const { addPizza, updatePizza, deletePizza } = useContext(PizzaContext);
  const [product, setProduct] = useState({
    id: '',
    nombre: '',
    descripcion: '',
    categoria: '',
    precio: '',
    stock: '',
    imagen: ''
  });

  const [user, setUser] = useState({
    id: '',
    email: ''
  });

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAddProduct = () => {
    const newPizza = {
      id: `p00${Math.floor(Math.random() * 1000)}`, // Genera un ID único
      name: product.nombre,
      desc: product.descripcion,
      category: product.categoria,
      price: parseFloat(product.precio),
      stock: parseInt(product.stock),
      img: product.imagen,
      ingredients: [], // Puedes agregar ingredientes si lo deseas
      createdBy: 'Admin' // O cualquier otro valor que desees
    };

    addPizza(newPizza); // Agrega la nueva pizza al contexto
    setProduct({
      id: '',
      nombre: '',
      descripcion: '',
      categoria: '',
      precio: '',
      stock: '',
      imagen: ''
    }); // Limpia el formulario
  };

  const handleUpdateProduct = () => {
    if (!product.id) {
      alert("Debes ingresar el ID de la pizza que deseas actualizar.");
      return;
    }

    const updatedPizza = {
      name: product.nombre,
      desc: product.descripcion,
      category: product.categoria,
      price: parseFloat(product.precio),
      stock: parseInt(product.stock),
      img: product.imagen,
    };

    updatePizza(product.id, updatedPizza); // Actualiza la pizza en el contexto
    alert("Pizza actualizada con éxito");
    setProduct({
      id: '',
      nombre: '',
      descripcion: '',
      categoria: '',
      precio: '',
      stock: '',
      imagen: ''
    }); // Limpia el formulario
  };

  const handleDeleteProduct = () => {
    if (!product.id) {
      alert("Debes ingresar el ID de la pizza que deseas eliminar.");
      return;
    }

    deletePizza(product.id); // Elimina la pizza del contexto
    alert("Pizza eliminada con éxito");
    setProduct({
      id: '',
      nombre: '',
      descripcion: '',
      categoria: '',
      precio: '',
      stock: '',
      imagen: ''
    }); // Limpia el formulario
  };

  const handleBlockUser = () => {
    // Lógica para bloquear usuario
    console.log('Usuario bloqueado:', user.id);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Card para Administrar Producto */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title">Administrar Producto</h5>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  value={product.id}
                  onChange={handleProductChange}
                />
              </div>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={product.nombre}
                  onChange={handleProductChange}
                />
              </div>
              <div className="form-group">
                <label>Descripción</label>
                <input
                  type="text"
                  className="form-control"
                  name="descripcion"
                  value={product.descripcion}
                  onChange={handleProductChange}
                />
              </div>
              <div className="form-group">
                <label>Categoría</label>
                <input
                  type="text"
                  className="form-control"
                  name="categoria"
                  value={product.categoria}
                  onChange={handleProductChange}
                />
              </div>
              <div className="form-group">
                <label>Precio</label>
                <input
                  type="text"
                  className="form-control"
                  name="precio"
                  value={product.precio}
                  onChange={handleProductChange}
                />
              </div>
              <div className="form-group">
                <label>Stock</label>
                <input
                  type="text"
                  className="form-control"
                  name="stock"
                  value={product.stock}
                  onChange={handleProductChange}
                />
              </div>
              <button className="btn btn-warning mr-2" onClick={handleUpdateProduct}>
                Actualizar
              </button>
              <button className="btn btn-danger" onClick={handleDeleteProduct}>
                Eliminar
              </button>
            </div>
          </div>
        </div>

        {/* Card para Agregar Producto */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h5 className="card-title">Agregar Producto</h5>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={product.nombre}
                  onChange={handleProductChange}
                />
              </div>
              <div className="form-group">
                <label>Descripción</label>
                <input
                  type="text"
                  className="form-control"
                  name="descripcion"
                  value={product.descripcion}
                  onChange={handleProductChange}
                />
              </div>
              <div className="form-group">
                <label>Categoría</label>
                <input
                  type="text"
                  className="form-control"
                  name="categoria"
                  value={product.categoria}
                  onChange={handleProductChange}
                />
              </div>
              <div className="form-group">
                <label>Precio</label>
                <input
                  type="text"
                  className="form-control"
                  name="precio"
                  value={product.precio}
                  onChange={handleProductChange}
                />
              </div>
              <div className="form-group">
                <label>Stock</label>
                <input
                  type="text"
                  className="form-control"
                  name="stock"
                  value={product.stock}
                  onChange={handleProductChange}
                />
              </div>
              <div className="form-group">
                <label>Imagen (URL)</label>
                <input
                  type="text"
                  className="form-control"
                  name="imagen"
                  value={product.imagen}
                  onChange={handleProductChange}
                />
              </div>
              <button className="btn btn-primary" onClick={handleAddProduct}>
                Guardar
              </button>
            </div>
          </div>
        </div>

        {/* Card para Bloquear Usuario */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header bg-danger text-white">
              <h5 className="card-title">Bloquear Usuario</h5>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Buscar ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  value={user.id}
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label>ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  value={user.id}
                  disabled
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={user.email}
                  disabled
                />
              </div>
              <button className="btn btn-dark" onClick={handleBlockUser}>
                Bloquear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;


