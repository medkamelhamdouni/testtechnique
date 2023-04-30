import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Card, CardTitle, CardBody, CardSubtitle } from 'reactstrap';
import axios from 'axios';

import './ArticleDetails.css';

const ArticleDetails = () => {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:8080/articles/${id}`);
      setArticle(result.data);
    };
    fetchData();
  }, [id]);
  

  return (
    <div className="article-details-container">
      <Link to="/articles" className="return-link">Retour à la liste des articles</Link>
      <Card className="article-details-card">
        <CardBody>
          <CardTitle>{article.title}</CardTitle>
          <CardSubtitle>{article.description}</CardSubtitle>
          <p>Quantité : {article.quantity}</p>
          <p>Catégorie : {article.category}</p>
          <Button tag={Link} to={`/articles/edit/${id}`} color="primary" className="edit-button">
            Modifier
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ArticleDetails;
