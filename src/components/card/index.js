import { useEffect, useState } from "react";
import api from "../../services";
import CardProduct from "./styles";
import { useContext } from "react";
import { ConfraternizationContext } from "../../providers/confraternization/index";
import { GraduationContext } from "../../providers/graduation/index";
import { WeddingContext } from "../../providers/wedding/index";

export default function Card() {
  const [products, setProducts] = useState([]);
  const [value, setvalue] = useState("");

  useEffect(() => {
    api.get("beers").then((response) => setProducts(response.data));
  }, []);

  const { Confraternization, addConfraternization } = useContext(
    ConfraternizationContext
  );
  const { addGraduation } = useContext(GraduationContext);
  const { addWedding } = useContext(WeddingContext);

  const handleClick = (item) => {
    if (value === "formatura" && Confraternization.includes(item)) {
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
    <>
      {products.map((item, index) => {
        return (
          <CardProduct key={index}>
            <img style={{ height: "200px" }} src={item.image_url} alt={index} />
            <h3>{item.name}</h3>
            <span>{item.first_brewed}</span>
            <p>
              {item.description.length > 200
                ? item.description.slice(0, 200).concat("...")
                : item.description.slice(0, 200)}
            </p>
            <h3>{item.volume.value}lts</h3>
            <div>
              <select value={value} onChange={(e) => setvalue(e.target.value)}>
                <option value="formatura">Formatura</option>
                <option value="casamento">Casamento</option>
                <option value="confratenizacao">Confraternização</option>
              </select>
              <button onClick={() => handleClick(item)}>Adicionar</button>
            </div>
          </CardProduct>
        );
      })}
    </>
  );
}
