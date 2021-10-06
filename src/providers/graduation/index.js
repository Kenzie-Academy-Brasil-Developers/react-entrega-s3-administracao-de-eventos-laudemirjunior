import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const GraduationContext = createContext([]);

export const GraduationProvider = ({ children }) => {
  const [graduation, setGraduation] = useState([]);

  const addGraduation = (item) => {
    if (graduation.includes(item)) {
      toast("Produto já foi incluido na lista de formatura!", {
        icon: "✖️",
        style: {
          borderRadius: "10px",
          background: "#ff4040",
          color: "#fff",
        },
      });
    } else {
      setGraduation([...graduation, item]);
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

  const removeGraduation = (item) => {
    const newGraduation = graduation.filter(
      (itemOn) => itemOn.name !== item.name
    );
    setGraduation(newGraduation);
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
    <GraduationContext.Provider
      value={{
        graduation,
        addGraduation,
        removeGraduation,
      }}
    >
      {children}
    </GraduationContext.Provider>
  );
};
