import styled from "styled-components";
import { FC } from "react";

const Container = styled.div`
  padding: 4px 12px;
  &:hover {
    background-color: #40444b;
    border-radius: 20px;

    cursor: pointer;
  }
`;

type Props = {
  onClick: () => void;
  children?: React.ReactNode;
};

const Button: FC<Props> = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export { Button };
