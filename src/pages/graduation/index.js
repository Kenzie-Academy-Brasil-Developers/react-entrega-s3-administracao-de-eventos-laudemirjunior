import { useContext } from "react";
import Bar from "../../components/Bar";
import CardCart from "../../components/cardCart";
import { GraduationContext } from "../../providers/graduation/index";
import { Container, MainContainer } from "./styles";

export default function Graduation() {
  const { graduation, removeGraduation } = useContext(GraduationContext);

  const handleClick = (item) => {
    removeGraduation(item);
  };

  return (
    <div>
      <Bar />
      <MainContainer>
        <Container>
          {graduation.map((item, index) => (
            <CardCart item={item} index={index} handleClick={handleClick} />
          ))}
        </Container>
      </MainContainer>
    </div>
  );
}
