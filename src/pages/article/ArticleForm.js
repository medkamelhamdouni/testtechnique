import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ArticleForm.css"; 

const ArticleForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = { title, description, quantity, category };
    axios
      .post("http://localhost:8080/articles", article)
      .then(() => {
        history.push("/articles");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
      <h2>Ajouter un article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre :</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description :</label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Quantité :</label>
          <input
            type="number"
            required
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <label>Catégorie :</label>
          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Choisissez une catégorie --</option>
            <option value="Fruits et légumes">Fruits et légumes</option>
            <option value="Produits laitiers">Produits laitiers</option>
            <option value="Viandes et poissons">Viandes et poissons</option>
            <option value="Produits surgelés">Produits surgelés</option>
            <option value="Boissons">Boissons</option>
          </select>
        </div>
        <button>Ajouter</button>
      </form>
    </div>
  );
};

export default ArticleForm;
