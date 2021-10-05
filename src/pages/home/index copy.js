import { useContext } from "react";
import Bar from "../../components/Bar";
import CardCart from "../../components/cardCart";
import { WeddingContext } from "../../providers/wedding/index";
import { Container, MainContainer } from "./styles";

export default function Wedding() {
  const { wedding, removeWedding } = useContext(WeddingContext);

  const handleClick = (item) => {
    removeWedding(item);
  };

  return (
    <div>
      <Bar />
      <MainContainer>
        <Container>
          {wedding.map((item, index) => (
            <CardCart item={item} index={index} handleClick={handleClick} />
          ))}
        </Container>
      </MainContainer>
    </div>
  );
}
