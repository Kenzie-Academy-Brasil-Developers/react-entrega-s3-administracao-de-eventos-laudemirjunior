import { useEffect, useState } from "react";
import api from "../../services";
import CardProduct from "./styles";
import { useContext } from "react";
import { ConfraternizationContext } from "../../providers/confraternization/index";
import { GraduationContext } from "../../providers/graduation/index";
import { WeddingContext } from "../../providers/wedding/index";

export default function Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("beers").then((response) => setProducts(response.data));
  }, []);

  const { addConfraternization } = useContext(ConfraternizationContext);
  const { Graduation, addGraduation } = useContext(GraduationContext);
  const { addWedding } = useContext(WeddingContext);

  console.log(Graduation);

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
              <button onClick={() => addGraduation(console.log(item))}>
                Add Graduação
              </button>
              <button onClick={() => addConfraternization(item)}>
                Add Casamento
              </button>
              <button onClick={() => addWedding(item)}>
                Add Confraternização
              </button>
            </div>
          </CardProduct>
        );
      })}
    </>
  );
}
