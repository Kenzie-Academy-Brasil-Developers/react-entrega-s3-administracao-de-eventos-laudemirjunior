import { BarNav, MainContainer } from "./styles";
import { useHistory } from "react-router";

const Bar = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const local = history.location.pathname;

  return (
    <MainContainer>
      <BarNav>
        <span
          style={
            local === "/"
              ? {
                  backgroundColor: "#bddbfa",
                  padding: "5px",
                  borderRadius: "10px",
                }
              : null
          }
          onClick={() => handleNavigation("/")}
        >
          Home
        </span>
        <span
          style={
            local === "/formatura"
              ? {
                  backgroundColor: "#bddbfa",
                  padding: "5px",
                  borderRadius: "10px",
                }
              : null
          }
          onClick={() => handleNavigation("/formatura")}
        >
          Formatura
        </span>
        <span
          style={
            local === "/casamento"
              ? {
                  backgroundColor: "#bddbfa",
                  padding: "5px",
                  borderRadius: "10px",
                }
              : null
          }
          onClick={() => handleNavigation("/casamento")}
        >
          Casamento
        </span>
        <span
          style={
            local === "/confraternizacao"
              ? {
                  backgroundColor: "#bddbfa",
                  padding: "5px",
                  borderRadius: "10px",
                }
              : null
          }
          onClick={() => handleNavigation("/confraternizacao")}
        >
          Confraternização
        </span>
      </BarNav>
    </MainContainer>
  );
};

export default Bar;
