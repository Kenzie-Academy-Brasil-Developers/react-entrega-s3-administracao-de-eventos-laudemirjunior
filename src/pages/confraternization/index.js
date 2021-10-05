import { useContext } from "react";
import Bar from "../../components/Bar";
import CardCart from "../../components/cardCart";
import { ConfraternizationContext } from "../../providers/confraternization/index";
import { Container, MainContainer } from "./styles";

export default function Confraternization() {
  const { confraternization, removeConfraternization } = useContext(
    ConfraternizationContext
  );

  const handleClick = (item) => {
    removeConfraternization(item);
  };

  return (
    <div>
      <Bar />
      <MainContainer>
        <Container>
          {confraternization.map((item, index) => (
            <CardCart item={item} index={index} handleClick={handleClick} />
          ))}
        </Container>
      </MainContainer>
    </div>
  );
}
