import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import axios from 'axios';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:8080/articles');
        setArticles(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Liste des articles</h2>
      <Table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Quantité</th>
            <th>Catégorie</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.code}>
              <td>
                <Link to={`/articles/${article.code}`}>{article.title}</Link>
              </td>
              <td>{article.description}</td>
              <td>{article.quantity}</td>
              <td>{article.categoryCode}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ArticlesList;
