import { createContext, useState, useEffect } from "react";
import api from "../../services";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  function handleData() {
    api
      .get()
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
