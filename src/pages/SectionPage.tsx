import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { useSectionsStore, useThreadsState } from "../state/store";
import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import { ThreadItem } from "../components/ThreadItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding-bottom: 200px;

  gap: 200px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 50px;

  gap: 30px;
  /* @media (min-width: 685px) {
    padding: 204px;
  } */
`;

const Input = styled.input``;

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

const EmptyContainer = styled.div`
  width: 100vw;
  height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 200px;
  width: 520px;
  border-radius: 30px;

  border: 1px solid gray;
`;

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const EndText = styled.span<{ size: number }>`
  font-family: Gilroy-Light;
  font-size: ${(props) => props.size + "px"};
  font-style: normal;
  color: #d9d9d930;
`;

const SectionPage: FC = () => {
  const { sections } = useSectionsStore();
  const { threads, getThreads } = useThreadsState();
  const [sectionName, setSectionName] = useState<string>("");

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      console.log(sections);

      const section = sections.find((elem) => elem.id === +id);

      console.log(section);
      // @ts-ignore
      setSectionName(section?.name);
      getThreads(id);
    }
  }, []);

  return (
    <Container>
      {sections.length > 0 ? (
        <>
          <ContentContainer>
            <Image src="../startBg.png" alt="png" />
            <Input />
            {threads.map((thread) => (
              <ThreadItem title={thread.title} text={thread.content.text} />
            ))}
          </ContentContainer>
          <CenterContainer>
            <EndText size={24}>Это конец.</EndText>
          </CenterContainer>
        </>
      ) : (
        <EmptyContainer>
          <EndText size={24}>Здесь пока пусто...</EndText>
        </EmptyContainer>
      )}
    </Container>
  );
};

export { SectionPage };
