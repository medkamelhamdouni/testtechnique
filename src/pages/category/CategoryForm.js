import React from "react";
import "./CategoryForm.css"; 

function CategoryForm(props) {
  const { onSubmit, category } = props;
  const [name, setName] = React.useState(category ? category.name : "");
  

  function handleSubmit(event) {
    event.preventDefault();
    const formData = { name};
    if (category) {
      formData.id = category.id;
    }

    fetch("http://localhost:8080/categories", {
      method: category ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        onSubmit(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="category-name">Name</label>
        <input
          type="text"
          className="form-control"
          id="category-name"
          placeholder="Enter category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <button type="submit" className="btn btn-primary">
        {category ? "Save" : "Add"}
      </button>
    </form>
  );
}

export default CategoryForm;
