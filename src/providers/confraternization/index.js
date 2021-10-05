import { createContext, useState } from "react";

export const ConfraternizationContext = createContext([]);

export const ConfraternizationProvider = ({ children }) => {
  const [Confraternization, setConfraternization] = useState([]);

  console.log(Confraternization);

  const addConfraternization = (item) => {
    setConfraternization([...Confraternization, item]);
  };

  const removeConfraternization = (item) => {
    const newConfraternization = Confraternization.filter(
      (itemOn) => itemOn.name !== item.name
    );
    setConfraternization(newConfraternization);
  };

  return (
    <ConfraternizationContext.Provider
      value={{
        Confraternization,
        addConfraternization,
        removeConfraternization,
      }}
    >
      {children}
    </ConfraternizationContext.Provider>
  );
};
