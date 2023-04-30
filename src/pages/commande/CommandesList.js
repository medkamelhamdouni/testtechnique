import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CommandesList = () => {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    const fetchCommandes = async () => {
      const response = await fetch('http://localhost:8080/commandes');
      const data = await response.json();
      setCommandes(data);
    };
    fetchCommandes();
  }, []);

  return (
    <div>
      <h1>Liste des commandes</h1>
      <Link to="/commandes/nouvelle">
        <button>Ajouter une commande</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Numéro</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {commandes.map((commande) => (
            <tr key={commande.id}>
              <td>{commande.numero}</td>
              <td>{commande.date}</td>
              <td>
                <Link to={`/commandes/${commande.id}`}>
                  <button>Voir détails</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommandesList;
