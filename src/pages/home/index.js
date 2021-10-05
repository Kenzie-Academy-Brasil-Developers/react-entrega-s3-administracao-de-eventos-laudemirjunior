import Card from "../../components/card";
import Bar from "../../components/Bar";
import { Container, MainContainer } from "./styles";

export default function Home() {
  return (
    <div>
      <Bar />
      <MainContainer>
        <Container>
          <Card />
        </Container>
      </MainContainer>
    </div>
  );
}
