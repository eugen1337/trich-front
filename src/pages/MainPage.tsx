import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { useSectionsStore } from "../state/store";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px;

  gap: 30px;
  @media (min-width: 685px) {
    padding: 204px;
  }
`;

const StartContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

const StartTextContainer = styled.div`
  backdrop-filter: blur(10px);
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MainText = styled.span`
  font-family: AKONY;
  font-size: 48px;
  font-style: normal;
  color: #ffffff;
`;

const Image = styled.img`
  position: absolute;
  top: 40px;
  right: 120px;
  z-index: -1;
  height: 600px;
  width: 726px;

  @media (max-width: 1300px) {
    display: none;
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

const Text = styled.span<{ size: number }>`
  font-family: Gilroy-ExtraBold;
  font-size: ${(props) => props.size + "px"};
  font-style: normal;
  color: #ffffff;
`;

const MainPage: FC = () => {
  const { sections, isLoading, error, getSections } = useSectionsStore();
  const navigator = useNavigate();

  useEffect(() => {
    getSections();
  }, [getSections]);

  return (
    <Container>
      <StartContainer>
        <StartTextContainer>
          <MainText>ТРИЧ</MainText>
          <Text size={16}>
            Платформа для анонимной обратной связи. Создавайте треды, делитесь
            своими мыслями, идеями, работами и получайте искренние комментарии и
            критику от других пользователей.
          </Text>
        </StartTextContainer>
        <Image src="./startBg.png" alt="png" />
      </StartContainer>

      <TitleContainer>
        <Text size={24}>Темы</Text>
        <Text size={24}>{sections.length}</Text>
      </TitleContainer>
      <Border>
        <SectionsContainer>
          {sections.map((section) => (
            <Button
              onClick={() => {
                navigator(`sections/${section.id}`);
              }}
              key={section.id + "section"}
            >
              <Text size={24}>{section.name}</Text>
            </Button>
          ))}
        </SectionsContainer>
      </Border>
    </Container>
  );
};

export { MainPage };
