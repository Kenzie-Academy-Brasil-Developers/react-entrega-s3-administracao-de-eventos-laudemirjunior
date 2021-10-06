import { useContext, useState } from "react";
import Bar from "../../components/Bar";
import CardCart from "../../components/cardCart";
import { GraduationContext } from "../../providers/graduation";
import { Container, MainContainer } from "./styles";
import Lottie from "react-lottie";
import animationData from "../../animation/beer.json";

export default function Graduation() {
  const { graduation, removeGraduation } = useContext(GraduationContext);

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
        {graduation.length === 0 ? (
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
