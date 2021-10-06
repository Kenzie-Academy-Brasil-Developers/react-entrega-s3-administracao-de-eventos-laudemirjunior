import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const ConfraternizationContext = createContext([]);

export const ConfraternizationProvider = ({ children }) => {
  const [confraternization, setConfraternization] = useState([]);

  const addConfraternization = (item) => {
    if (confraternization.includes(item)) {
      toast.error("Produto já foi incluido na lista de confraternização!");
    } else {
      setConfraternization([...confraternization, item]);
    }
  };

  const removeConfraternization = (item) => {
    const newConfraternization = confraternization.filter(
      (itemOn) => itemOn.name !== item.name
    );
    setConfraternization(newConfraternization);
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
