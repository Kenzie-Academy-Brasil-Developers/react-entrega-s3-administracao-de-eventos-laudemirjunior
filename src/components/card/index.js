import { useEffect, useState } from "react";
import api from "../../services";
import CardProduct from "./styles";

import Select from "../select";

export default function Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("beers").then((response) => setProducts(response.data));
  }, []);

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
              <Select item={item} />
            </div>
          </CardProduct>
        );
      })}
    </>
  );
}
