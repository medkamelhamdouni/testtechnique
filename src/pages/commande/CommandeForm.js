import React, { useState } from 'react';

const CommandeForm = ({ onSubmit }) => {
  const [numero, setNumero] = useState('');
  const [date, setDate] = useState('');
  const [articles, setArticles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/commandes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numero, date, articles })
      });
      const data = await response.json();
      onSubmit(data);
      setNumero('');
      setDate('');
      setArticles([]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleArticleChange = (e, index) => {
    const { name, value } = e.target;
    const newArticles = [...articles];
    newArticles[index][name] = value;
    setArticles(newArticles);
  };

  const handleAddArticle = () => {
    setArticles([...articles, { article: '', quantite: '' }]);
  };

  const handleRemoveArticle = (index) => {
    const newArticles = [...articles];
    newArticles.splice(index, 1);
    setArticles(newArticles);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="numero">Numéro de commande:</label>
        <input type="text" id="numero" name="numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Articles:</label>
        {articles.map((article, index) => (
          <div className="article" key={index}>
            <div className="form-group">
              <label htmlFor={`article${index}`}>Article:</label>
              <input type="text" id={`article${index}`} name="article" value={article.article} onChange={(e) => handleArticleChange(e, index)} />
            </div>
            <div className="form-group">
              <label htmlFor={`quantite${index}`}>Quantité:</label>
              <input type="number" id={`quantite${index}`} name="quantite" value={article.quantite} onChange={(e) => handleArticleChange(e, index)} />
            </div>
            <button type="button" onClick={() => handleRemoveArticle(index)}>Supprimer</button>
          </div>
        ))}
        <button type="button" onClick={handleAddArticle}>Ajouter un article</button>
      </div>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default CommandeForm;
