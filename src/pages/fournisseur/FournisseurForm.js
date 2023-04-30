import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FournisseurForm = () => {
  const history = useNavigate();
  const [fournisseur, setFournisseur] = useState({
    nom: "",
    adresse: "",
    email: "",
    telephone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/fournisseurs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fournisseur)
      });
      const data = await response.json();
      history.push(`/fournisseurs/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFournisseur({ ...fournisseur, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          className="form-control"
          id="nom"
          name="nom"
          value={fournisseur.nom}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="adresse">Adresse</label>
        <input
          type="text"
          className="form-control"
          id="adresse"
          name="adresse"
          value={fournisseur.adresse}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={fournisseur.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="telephone">Téléphone</label>
        <input
          type="text"
          className="form-control"
          id="telephone"
          name="telephone"
          value={fournisseur.telephone}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Ajouter
      </button>
    </form>
  );
};

export default FournisseurForm;
