import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useSectionsStore, useThreadsState } from "../state/store";
import { useParams } from "react-router-dom";
import { ThreadItem } from "../components/ThreadItem";
import { Modal } from "@mui/material";
import { AddThreadModal } from "../components/AddThreadModal";
import { Button } from "../components/Button";

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
`;

const Input = styled.input``;

const EmptyContainer = styled.div`
  width: 100vw;
  height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionImage = styled.img`
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

const EndText = styled.span<{ size: number }>`
  font-family: Gilroy-Light;
  font-size: ${(props) => props.size + "px"};
  font-style: normal;
  color: #d9d9d930;
`;

const SectionPage: FC = () => {
  const { sections, currentSection, getSection } = useSectionsStore();
  const { threads, getThreads } = useThreadsState();
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      getSection(id);
      getThreads(id);
    }
  }, []);

  return (
    <Container>
      {currentSection != null ? (
        <>
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <EndText size={20}>Добавить тред</EndText>
          </Button>
          <ContentContainer>
            <SectionImage src={currentSection?.image} alt="png" />
            <Input />
            {threads.map((thread) => (
              <ThreadItem
                title={thread.title}
                text={thread.content.text}
                image={thread.content.images[0]}
              />
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
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <AddThreadModal
          onClose={() => {
            setModalOpen(false);
          }}
        />
      </Modal>
    </Container>
  );
};

export { SectionPage };
