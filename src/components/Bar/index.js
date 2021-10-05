import { BarNav, MainContainer } from "./styles";
import { AiFillHome } from "react-icons/ai";
import { useHistory } from "react-router";

export default function Bar() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <MainContainer>
      <BarNav>
        <span>
          <AiFillHome
            style={{ fontSize: "20px" }}
            onClick={() => handleNavigation("/")}
          />
        </span>
        <span onClick={() => handleNavigation("/formatura")}>Formatura</span>
        <span onClick={() => handleNavigation("/casamento")}>Casamento</span>
        <span onClick={() => handleNavigation("/confraternizacao")}>
          Confraternização
        </span>
      </BarNav>
    </MainContainer>
  );
}
