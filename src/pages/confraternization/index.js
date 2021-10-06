import { useContext, useState } from "react";
import CardCart from "../../components/cardCart";
import { ConfraternizationContext } from "../../providers/confraternization/index";
import { Container, MainContainer } from "./styles";
import Lottie from "react-lottie";
import animationData from "../../animation/beer.json";
import Bar from "../../components/Bar";

export default function Confraternization() {
  const { confraternization, removeConfraternization } = useContext(
    ConfraternizationContext
  );

  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
        {confraternization.length === 0 ? (
          <Lottie
            options={defaultOptions}
            height={300}
            width={300}
            speed={0.5}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        ) : null}
      </MainContainer>
    </div>
  );
}
