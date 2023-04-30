import React from 'react';
import { Link } from 'react-router-dom';
const style = {
  header: {
    backgroundColor: "#fff",
    borderBottom: "1px solid #ccc",
    padding: "10px",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ul: {
    listStyle: "none",
    display: "flex",
  },
  li: {
    marginRight: "20px",
  },
  a: {
    color: "#333",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "all 0.3s ease",
  },
  button: {
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};
function Header() {
  return (
    <header style={style.header}>
    <nav style={style.nav}>
      <ul style={style.ul}>
        <li style={style.li}>
          <Link to="/" style={style.a}>Accueil</Link>
        </li>
        <li style={style.li}>
          <Link to="/categories" style={style.a}>Catégories</Link>
        </li>
        <li style={style.li}>
          <Link to="/articles" style={style.a}>Articles</Link>
        </li>
        <li style={style.li}>
          <Link to="/fournisseurs" style={style.a}>Fournisseurs</Link>
        </li>
        <li style={style.li}>
          <Link to="/factures" style={style.a}>Factures</Link>
        </li>
        <li style={style.li}>
          <Link to="/commandes" style={style.a}>Commandes</Link>
        </li>
        
       
      </ul>
    </nav>
  </header>
  );
}

export default Header;
