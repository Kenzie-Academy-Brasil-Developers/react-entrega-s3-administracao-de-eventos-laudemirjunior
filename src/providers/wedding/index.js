import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const WeddingContext = createContext([]);

export const WeddingProvider = ({ children }) => {
  const [wedding, setWedding] = useState([]);

  const addWedding = (item) => {
    if (wedding.includes(item)) {
      toast("Produto já foi incluido na lista de casamento!", {
        icon: "✖️",
        style: {
          borderRadius: "10px",
          background: "#ff4040",
          color: "#fff",
        },
      });
    } else {
      setWedding([...wedding, item]);
      toast("Produto adicionado!", {
        icon: "✔️",
        style: {
          borderRadius: "10px",
          background: "#a3ffa8",
          color: "#000",
        },
      });
    }
  };

  const removeWedding = (item) => {
    const newWedding = wedding.filter((itemOn) => itemOn.name !== item.name);
    setWedding(newWedding);
    toast("Produto removido com sucesso!", {
      icon: "✔️",
      style: {
        borderRadius: "10px",
        background: "#a3ffa8",
        color: "#000",
      },
    });
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
