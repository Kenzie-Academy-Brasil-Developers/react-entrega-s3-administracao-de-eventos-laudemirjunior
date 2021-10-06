import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const GraduationContext = createContext([]);

export const GraduationProvider = ({ children }) => {
  const [graduation, setGraduation] = useState([]);

  const addGraduation = (item) => {
    if (graduation.includes(item)) {
      toast.error("Produto já foi incluido na lista de formatura!");
    } else {
      setGraduation([...graduation, item]);
    }
  };

  const removeGraduation = (item) => {
    const newGraduation = graduation.filter(
      (itemOn) => itemOn.name !== item.name
    );
    setGraduation(newGraduation);
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
