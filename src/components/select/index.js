import { useState } from "react";
import { useContext } from "react";
import { ConfraternizationContext } from "../../providers/confraternization/index";
import { GraduationContext } from "../../providers/graduation/index";
import { WeddingContext } from "../../providers/wedding/index";

const Select = ({ item }) => {
  const [value, setvalue] = useState("");

  const { addConfraternization } = useContext(ConfraternizationContext);
  const { addGraduation } = useContext(GraduationContext);
  const { addWedding } = useContext(WeddingContext);

  const handleClick = (item) => {
    if (value === "formatura") {
      addGraduation(item);
    }
    if (value === "casamento") {
      addWedding(item);
    }
    if (value === "confratenizacao") {
      addConfraternization(item);
    }
  };

  return (
    <div>
      <select value={value} onChange={(e) => setvalue(e.target.value)}>
        <option>Selecione uma opção</option>
        <option value="formatura">Formatura</option>
        <option value="casamento">Casamento</option>
        <option value="confratenizacao">Confraternização</option>
      </select>
      <button onClick={() => handleClick(item)}>Adicionar</button>
    </div>
  );
};

export default Select;
