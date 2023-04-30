import React, { useState } from 'react';
import Header from './Header';
import Dashboard from './pages/Dashboard.js';
import ArticleDetails from './article/ArticleDetails';
import ArticleForm from './article/ArticleForm';
import FournisseurDetails from './pages/fournisseur/FournisseurDetails';
import FournisseurForm from './pages/fournisseur/FournisseurForm';
import CommandeDetails from './commande/CommandeDetails';
import CommandeForm from './commande/CommandeForm';
import CategoryForm from './category/CategoryForm';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import CategoriesList from './category/CategoriesList';
import CommandesList from './commande/CommandesList';

import FournisseursList from './pages/fournisseur/FournisseursList';
import ArticlesList from './article/ArticlesList';

function App() {
  const [articles, setArticles] = useState([]);
  const [fournisseurs, setFournisseurs] = useState([]);
  const [commandes, setCommandes] = useState([]);
  const [categories, setCategories] = useState([]);
/*
<Route path="/articles" exact>
  <ArticlesList articles={articles} setArticles={setArticles} />
</Route>
 <Route path="/fournisseurs" exact>
            <FournisseursList fournisseurs={fournisseurs} setFournisseurs={setFournisseurs} />
          </Route>
<Route path="/factures" exact>
            <FacturesList factures={factures} setFactures={setFactures} />
          </Route>
<Route path="/categories" exact>
            <CategoriesList categories={categories} setCategories={setCategories} />
          </Route>
<Route path="/commandes" exact>
            <CommandesList commandes={commandes} setCommandes={setCommandes} />
          </Route>

*/ 
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Dashboard/>} />
          
          <Route path="/articles/:id" element={<ArticleDetails/>} />
          <Route path="/add-article" element={<ArticleForm/>} />
          <Route path="/edit-article/:id" element={<ArticleForm/>} />
          <Route path="/fournisseurs/:id" element={<FournisseurDetails/>} />
          <Route path="/add-fournisseur" element={<FournisseurForm/>} />
          <Route path="/edit-fournisseur/:id" element={<FournisseurForm/>} />
          <Route path="/commandes/:id" element={<CommandeDetails/>} />
          <Route path="/commandes/nouvelle" element={<CommandeForm/>} />
          <Route path="/edit-commande/:id" element={<CommandeForm/>} />
          <Route path="/categories/new" element={<CategoryForm/>} />
          <Route path="/categories" element={<CategoriesList/>} />
          <Route path="/edit-category/:id" element={<CategoryForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
