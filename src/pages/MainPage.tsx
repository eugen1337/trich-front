import { FC, useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 30px;
  @media (min-width: 1000px) {
    padding: 204px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: #2f3035;

  padding: 10px 20px;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
`;

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #2f3035;

  padding: 20px;
  border-radius: 20px;

  gap: 10px;
`;

const Border = styled.div`
  padding: 1px;
  border-radius: 20px;
  background-image: linear-gradient(to bottom, #d9d9d9 0%, transparent 100%);
`;

const Text = styled.span`
  font-family: Gilroy-ExtraBold;
  font-style: normal;
  color: #ffffff;
`;

const MainPage: FC = () => {
  const [sections, setSections] = useState<string[]>([
    "Тема",
    "Творчество",
    "Игры",
    "Японская культура",
    "Мемы",
  ]);

  return (
    <Container>
      <TitleContainer>
        <Text>Темы</Text>
        <Text>{sections.length}</Text>
      </TitleContainer>
      <Border>
        <SectionsContainer>
          {sections.map((section) => (
            <Button onClick={() => {}}>
              <Text>{section}</Text>
            </Button>
          ))}
        </SectionsContainer>
      </Border>
    </Container>
  );
};

export { MainPage };
