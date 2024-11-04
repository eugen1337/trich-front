import styled from "styled-components";
import { HandySvg } from "handy-svg";
import TeamLogo from "../assets/TeamLogo.svg";
import { FC, useState } from "react";
import { Button } from "./Button";

const Container = styled.div`
  width: 100%;
  height: 72px;
  background-color: #292a2e;

  padding: 16px 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1000px) {
    padding: 16px 200px;
  }
`;

const Text = styled.span`
  font-family: Gilroy-ExtraBold;
  font-style: normal;
  color: #ffffff;
`;

const Header: FC = () => {
  const [threadName, setThreadName] = useState<string>("Творчество");

  return (
    <Container>
      <Button onClick={() => {}}>
        <Text>Главная</Text>
      </Button>
      <Text>{threadName}</Text>
      <Button onClick={() => {}}>
        <Text>Добавить тред</Text>
      </Button>
    </Container>
  );
};

export { Header };
