import { createContext, useState } from "react";

export const WeddingContext = createContext([]);

export const WeddingProvider = ({ children }) => {
  const [Wedding, setWedding] = useState([]);

  console.log(Wedding);

  const addWedding = (item) => {
    setWedding([...Wedding, item]);
  };
  const removeWedding = (item) => {
    const newWedding = Wedding.filter((itemOn) => itemOn.name !== item.name);
    setWedding(newWedding);
  };

  return (
    <WeddingContext.Provider
      value={{
        Wedding,
        addWedding,
        removeWedding,
      }}
    >
      {children}
    </WeddingContext.Provider>
  );
};
