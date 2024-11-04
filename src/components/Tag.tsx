import styled from "styled-components";
import { FC } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3px 8px;
  border-radius: 10px;
  background-color: #ffffff;
`;

const Text = styled.span`
  font-family: Gilroy-ExtraBold;
  font-size: 12px;
  font-style: normal;
  color: #292a2e;
`;

const Tag: FC<{ title: string }> = ({ title }) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
};

export { Tag };
