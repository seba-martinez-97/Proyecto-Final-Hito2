import React, { createContext, useState, useEffect } from 'react';
import usersData from '../assets/mocks/users.json'; // Importa los usuarios desde el archivo JSON
import axios from 'axios'; // Importa axios para hacer solicitudes HTTP

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario
  const [compras, setCompras] = useState([]); // Estado para almacenar las compras del usuario

  // Función para obtener las compras del usuario desde el backend
  const fetchCompras = async (userId) => {
    try {
      const response = await axios.get(`/api/compras/${userId}`); // Ajusta la URL según tu backend
      setCompras(response.data); // Almacena las compras en el estado
    } catch (error) {
      console.error('Error fetching compras:', error);
    }
  };

  // Función de login
  const login = async (email, password) => {
    const user = usersData.find(user => user.email === email && user.password === password);
    if (user) {
      setIsAuthenticated(true);
      setUser(user); // Almacena los datos del usuario autenticado
      fetchCompras(user.id); // Obtiene las compras del usuario después de iniciar sesión
      return true;
    } else {
      return false;
    }
  };

  // Función de registro
  const registerUser = async (name, email, password) => {
    const newUser = {
      name,
      email,
      password,
      id: Math.random().toString(36).substr(2, 9), // Genera un ID único
    };
    setIsAuthenticated(true);
    setUser(newUser); // Almacena los datos del nuevo usuario
    return true;
  };

  // Función de logout
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null); // Limpia los datos del usuario al cerrar sesión
    setCompras([]); // Limpia las compras al cerrar sesión
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        user,
        compras, // Proporciona las compras en el contexto
        login,
        registerUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};