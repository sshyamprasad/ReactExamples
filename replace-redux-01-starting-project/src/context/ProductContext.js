import React, { useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
  toggle: ()=>{},
});

const ProductsProvider = (props) => {
  const [productsList, setProdctsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);
  const toggle = (id) => {
    setProdctsList([
      {
        id: "p1",
        title: "Red Scarf",
        description: "A pretty red scarf.",
        isFavorite: true,
      },
      {
        id: "p2",
        title: "Blue T-Shirt",
        description: "A pretty blue t-shirt.",
        isFavorite: true,
      },
      {
        id: "p3",
        title: "Green Trousers",
        description: "A pair of lightly green trousers.",
        isFavorite: false,
      },
      {
        id: "p4",
        title: "Orange Hat",
        description: "Street style! An orange hat.",
        isFavorite: false,
      },
    ]);
  };
  return (
    <ProductsContext.Provider value={{ products: productsList, toggle: toggle }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
