import { createContext, useState } from "react";

export const GraduationContext = createContext([]);

export const GraduationProvider = ({ children }) => {
  const [Graduation, setGraduation] = useState([]);

  const addGraduation = (item) => {
    setGraduation([...Graduation, item]);
  };

  const removeGraduation = (item) => {
    const newGraduation = Graduation.filter(
      (itemOn) => itemOn.name !== item.name
    );
    setGraduation(newGraduation);
  };

  return (
    <GraduationContext.Provider
      value={{ Graduation, addGraduation, removeGraduation }}
    >
      {children}
    </GraduationContext.Provider>
  );
};
