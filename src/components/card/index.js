import CardProduct from "./styles";
import Select from "../select";
import { useContext } from "react";
import { ProductsContext } from "../../providers/products";

export default function Card() {
  const { products } = useContext(ProductsContext);

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
                ? item.description.slice(0, 150).concat("...")
                : item.description.slice(0, 150)}
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
