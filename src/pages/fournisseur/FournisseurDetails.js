import React, { useEffect, useState } from 'react';

const FournisseurDetails = ({ fournisseur }) => {
  const [fournisseurData, setFournisseurData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/fournisseurs/${fournisseur.id}`);
      const data = await response.json();
      setFournisseurData(data);
    };
    fetchData();
  }, [fournisseur.id]);

  if (!fournisseurData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{fournisseurData.name}</h1>
      <p>
        <strong>Address:</strong> {fournisseurData.address}
      </p>
      <p>
        <strong>Phone:</strong> {fournisseurData.phone}
      </p>
    </div>
  );
};

export default FournisseurDetails;
