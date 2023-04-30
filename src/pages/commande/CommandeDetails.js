import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CommandeDetails = () => {
  const { id } = useParams();
  const [commande, setCommande] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/commandes/${id}`)
      .then(response => response.json())
      .then(data => setCommande(data))
      .catch(error => console.error(error));

    fetch(`http://localhost:8080/commandes/${id}/articles`)
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!commande) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Détails de la commande {commande.numero}</h1>
      <p>ID: {commande.id}</p>
      <p>Date: {commande.date}</p>
      <h2>Articles associés</h2>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.titre}</td>
              <td>{article.quantite}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommandeDetails;
