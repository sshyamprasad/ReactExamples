import React, { useEffect, useState } from "react";

function Asnc() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    try {
      fetch("https://api.publicapis.org/categories")
      .then((response) => {
        console.log("response=", response)
        if (!response.ok) {
          throw new Error("Response not ok!");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data=", data)
        setCategories(data.categories);
      });
    } catch (error) {
      console.log("error=", error)
    }

  }, []);

  return (
    <div>
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
