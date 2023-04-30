import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './categories-list.css';

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios.get('http://localhost:8080/categories');
      setCategories(result.data);
    };
    fetchCategories();
  }, []);

  const renderCategories = () => {
    if (categories.length === 0) {
      return (
        <tr>
          <td colSpan="3" className="no-categories">No categories found.</td>
        </tr>
      );
    }

    return categories.map((category) => (
      <tr key={category.id}>
        <td>{category.name}</td>
       
        <td>
          <Link to={`/categories/${category.id}`} className="btn btn-primary">
            Details
          </Link>
        </td>
      </tr>
    ));
  };

  return (
    <div className="categories-list">
      <h2>Categories</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
           
            <th></th>
          </tr>
        </thead>
        <tbody>{renderCategories()}</tbody>
      </table>
      <Link to="/categories/new" className="btn btn-primary add-category-btn">
        Add New Category
      </Link>
    </div>
  );
};

export default CategoriesList;
