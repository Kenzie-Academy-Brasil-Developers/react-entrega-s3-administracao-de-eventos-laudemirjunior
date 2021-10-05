import styled from "styled-components";

export const CardProduct = styled.div`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 250px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin: 25px;
  padding: 10px;
  button {
    box-shadow: inset 0px 1px 0px 0px #dcecfb;
    background: linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);
    background-color: #bddbfa;
    border-radius: 6px;
    border: 1px solid #84bbf3;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #528ecc;
    margin: 10px;
    width: 95%;
  }
  button:hover {
    background: linear-gradient(to bottom, #80b5ea 5%, #bddbfa 100%);
    background-color: #80b5ea;
  }
  button:active {
    position: relative;
    top: 1px;
  }
`;
