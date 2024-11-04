import styled from "styled-components";
import { FC, useEffect, useState } from "react";
import { Button } from "./Button";
import { useNavigate, useParams } from "react-router-dom";
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

  const { sections } = useSectionsStore();
  const [sectionName, setSectionName] = useState<string>("");

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      console.log(sections);

      const section = sections.find((elem) => elem.id === +id);

      console.log(section);
      // @ts-ignore
      setSectionName(section?.name);
    }
  }, []);

  return (
    <Container>
      <Button
        onClick={() => {
          navigator("/");
        }}
      >
        <Text>Главная</Text>
      </Button>
      <Text>{sectionName}</Text>
      <Button onClick={() => {}}>
        <Text>Добавить тред</Text>
      </Button>
    </Container>
  );
};

export { Header };
