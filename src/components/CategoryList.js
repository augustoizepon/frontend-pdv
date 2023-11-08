// CategoryList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryList({ token }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://backendfrentedeloja.onrender.com/categoria', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategories(response.data);
      } catch (error) {
        console.log(error);
        console.error('Erro ao obter categorias', error);
      }
    };
    fetchCategories();
  }, [token]);

  return (
    <div>
      <h2>Lista de Categorias</h2>
      <ul >
        {categories.map((category) => (
          <li key={category.id}>{category.id}. {category.descricao}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
