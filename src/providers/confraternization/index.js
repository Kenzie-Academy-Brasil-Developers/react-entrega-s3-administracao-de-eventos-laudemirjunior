import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const ConfraternizationContext = createContext([]);

export const ConfraternizationProvider = ({ children }) => {
  const [confraternization, setConfraternization] = useState([]);

  const addConfraternization = (item) => {
    if (confraternization.includes(item)) {
      toast("Produto já foi incluido na lista de confraternização!", {
        icon: "✖️",
        style: {
          borderRadius: "10px",
          background: "#ff4040",
          color: "#fff",
        },
      });
    } else {
      setConfraternization([...confraternization, item]);
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

  const removeConfraternization = (item) => {
    const newConfraternization = confraternization.filter(
      (itemOn) => itemOn.name !== item.name
    );
    setConfraternization(newConfraternization);
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
    <ConfraternizationContext.Provider
      value={{
        confraternization,
        addConfraternization,
        removeConfraternization,
      }}
    >
      {children}
    </ConfraternizationContext.Provider>
  );
};
