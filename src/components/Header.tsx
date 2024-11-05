import styled from "styled-components";
import { FC } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { useSectionsStore } from "../state/store";

const Container = styled.div`
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
  const navigator = useNavigate();

  const { currentSection } = useSectionsStore();

  return (
    <Container>
      <Button
        onClick={() => {
          navigator("/");
        }}
      >
        <Text>Главная</Text>
      </Button>
      <Text>{currentSection?.name}</Text>
      <Button onClick={() => {}}>
        <Text>Добавить тред</Text>
      </Button>
    </Container>
  );
};

export { Header };
