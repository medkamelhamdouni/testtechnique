import React from "react";
import { Link } from "react-router-dom";
import "./FournisseursList.css";

function FournisseursList() {
  const [fournisseurs, setFournisseurs] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8080/fournisseurs')
      .then((response) => response.json())
      .then((data) => setFournisseurs(data));
  }, []);

  return (
    <div className="fournisseurs-list">
      <h2 className="fournisseurs-list__title">Fournisseurs</h2>
      <table className="fournisseurs-list__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fournisseurs.map((fournisseur) => (
            <tr key={fournisseur.id}>
              <td>{fournisseur.name}</td>
              <td>{fournisseur.email}</td>
              <td>{fournisseur.phone}</td>
              <td>
                <Link
                  to={`/fournisseurs/${fournisseur.id}`}
                  className="btn btn-primary mr-2"
                >
                  View
                </Link>
                <Link
                  to={`/fournisseurs/${fournisseur.id}/edit`}
                  className="btn btn-secondary"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FournisseursList;
