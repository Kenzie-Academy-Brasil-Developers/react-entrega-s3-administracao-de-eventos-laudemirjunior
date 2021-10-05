import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

export const BarNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 1200px;
  span {
    cursor: pointer;
    font-weight: bold;
    width: 70px;
  }
`;
