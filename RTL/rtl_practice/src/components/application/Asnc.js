import React, { useEffect, useState } from "react";

function Asnc() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      async function fetchCategories() {
        try {
          const response = await fetch('https://api.publicapis.org/categories');
          const data = await response.json();
          setCategories(data.categories);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      }
  
      fetchCategories();
    }, []);
  
    return (
      <div className="App">
        <h1>Categories</h1>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    );
}

export default Asnc;
