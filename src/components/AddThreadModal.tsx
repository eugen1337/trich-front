import styled from "styled-components";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "./Button";
import { useSectionsStore, useThreadsState } from "../state/store";
import { useParams } from "react-router-dom";

const ModalContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 800px;

  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 30px;

  background-color: #2f3035;
  border-radius: 20px;
  border: 1px solid #d9d9d9;

  box-shadow: 0 0 20px rgba(251, 251, 251, 0.8); /* Эффект свечения */
  transition: box-shadow 0.3s ease; /* Плавный переход */
`;

const ContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 20px;
`;

const FieldContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const Text = styled.span<{ size: number }>`
  margin-left: 20px;
  margin-bottom: 9px;
  font-family: Gilroy-ExtraBold;
  font-size: ${(props) => props.size + "px"};
  font-style: normal;
  color: #ffffff;
`;

const AddThreadModal: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [file, setFile] = useState<File | undefined>(undefined);

  const { id } = useParams();

  const { sendNewThread } = useSectionsStore();
  const submitModal = () => {
    if (id)
      sendNewThread(id, {
        title,
        tags: [tags, tags],
        content: { text, images: file ? [file] : undefined },
      });
    onClose();
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log(event.target.files[0].name);

      setFile(event.target.files[0]);
    }
  };

  return (
    <ModalContainer>
      <Container>
        <Text size={24}>Создать тред</Text>
        <ContentContainer>
          <FieldContainer>
            <Text size={20}>Заголовок</Text>
            <TextField
              sx={{
                backgroundColor: "#40444B",
                borderRadius: 20,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 20,
                    borderWidth: 0, // default
                  },
                  "&.Mui-focused fieldset": {
                    border: "2px solid #ca581a", // focus
                  },
                },
              }}
              slotProps={{
                htmlInput: {
                  sx: {
                    color: "#ffffff",
                    marginLeft: "10px",
                    fontFamily: "Gilroy-Light",
                  },
                },
              }}
              size="small"
              value={title}
              placeholder="Напиши название"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              fullWidth
            />
          </FieldContainer>
          <FieldContainer>
            <Text size={20}>Теги</Text>
            <TextField
              sx={{
                backgroundColor: "#40444B",
                borderRadius: 20,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 20,
                    borderWidth: 0, // default
                  },
                  "&.Mui-focused fieldset": {
                    border: "2px solid #ca581a", // focus
                  },
                },
              }}
              slotProps={{
                htmlInput: {
                  sx: {
                    color: "#ffffff",
                    marginLeft: "10px",
                    fontFamily: "Gilroy-Light",
                  },
                },
              }}
              size="small"
              value={tags}
              placeholder="Например: #дизайн #творчество"
              onChange={(e) => {
                setTags(e.target.value);
              }}
              fullWidth
            />
          </FieldContainer>
          <FieldContainer>
            <Text size={20}>Описание</Text>
            <TextField
              sx={{
                backgroundColor: "#40444B",
                borderRadius: 20,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 20,
                    borderWidth: 0, // default
                  },
                  "&.Mui-focused fieldset": {
                    border: "2px solid #ca581a", // focus
                  },
                },
              }}
              slotProps={{
                htmlInput: {
                  sx: {
                    color: "#ffffff",
                    marginLeft: "10px",
                    fontFamily: "Gilroy-Light",
                  },
                },
              }}
              size="small"
              value={text}
              placeholder="Добавь описание"
              onChange={(e) => {
                setText(e.target.value);
              }}
              fullWidth
            />
          </FieldContainer>
          {/* <input type="file" alt="img" onChange={onChangeFile} /> */}
        </ContentContainer>
        <Button onClick={submitModal}>
          <Text size={20}>Отправить</Text>
        </Button>
      </Container>
    </ModalContainer>
  );
};

export { AddThreadModal };
