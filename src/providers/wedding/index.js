import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const WeddingContext = createContext([]);

export const WeddingProvider = ({ children }) => {
  const [wedding, setWedding] = useState([]);

  const addWedding = (item) => {
    if (wedding.includes(item)) {
      toast.error("Produto já foi incluido na lista de casamento!!");
    }
    setWedding([...wedding, item]);
  };
  const removeWedding = (item) => {
    const newWedding = wedding.filter((itemOn) => itemOn.name !== item.name);
    setWedding(newWedding);
  };

  return (
    <WeddingContext.Provider
      value={{
        wedding,
        addWedding,
        removeWedding,
      }}
    >
      {children}
    </WeddingContext.Provider>
  );
};
