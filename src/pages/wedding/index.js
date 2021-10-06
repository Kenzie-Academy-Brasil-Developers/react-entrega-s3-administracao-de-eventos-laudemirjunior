import { useContext, useState } from "react";
import Bar from "../../components/Bar";
import CardCart from "../../components/cardCart";
import { WeddingContext } from "../../providers/wedding/index";
import { Container, MainContainer } from "../home/styles";
import Lottie from "react-lottie";
import animationData from "../../animation/beer.json";

export default function Wedding() {
  const { wedding, removeWedding } = useContext(WeddingContext);

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
        {wedding.length === 0 ? (
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
