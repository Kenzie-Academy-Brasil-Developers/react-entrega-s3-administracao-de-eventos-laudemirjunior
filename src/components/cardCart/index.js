import { CardProduct } from "./styles";

export default function CardCart({ item, index, handleClick }) {
  return (
    <CardProduct>
      <img style={{ height: "200px" }} src={item.image_url} alt={index} />
      <h3>{item.name}</h3>
      <span>{item.first_brewed}</span>
      <p>
        {item.description.length > 200
          ? item.description.slice(0, 150).concat("...")
          : item.description.slice(0, 150)}
      </p>
      <h3>{item.volume.value}lts</h3>
      <button onClick={() => handleClick(item)}>Remover</button>
    </CardProduct>
  );
}
