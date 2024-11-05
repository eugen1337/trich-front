import styled from "styled-components";
import { HandySvg } from "handy-svg";
import TeamLogo from "../assets/TeamLogo.svg";
import { FC } from "react";

const Container = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 70px;
  background-color: #212226;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer: FC = () => {
  return (
    <Container>
      <HandySvg src={TeamLogo} className="icon" width="65" height="52" />
    </Container>
  );
};

export { Footer };
