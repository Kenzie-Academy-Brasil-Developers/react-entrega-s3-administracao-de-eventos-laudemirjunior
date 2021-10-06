import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  function handleData() {
    axios
      .get(`https://api.punkapi.com/v2/beers`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
