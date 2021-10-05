import { createContext, useState } from "react";

export const ConfraternizationContext = createContext([]);

export const ConfraternizationProvider = ({ children }) => {
  const [confraternization, setConfraternization] = useState([]);

  const addConfraternization = (item) => {
    setConfraternization([...confraternization, item]);
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
