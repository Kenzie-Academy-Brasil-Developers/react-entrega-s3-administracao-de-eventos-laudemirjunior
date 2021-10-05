import { createContext, useState } from "react";

export const GraduationContext = createContext([]);

export const GraduationProvider = ({ children }) => {
  const [graduation, setGraduation] = useState([]);

  const addGraduation = (item) => {
    setGraduation([...graduation, item]);
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
