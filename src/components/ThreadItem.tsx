import styled from "styled-components";
import { HandySvg } from "handy-svg";
import TeamLogo from "../assets/TeamLogo.svg";
import { FC } from "react";
import { Tag } from "./Tag";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px 24px;

  gap: 6px;
  border-radius: 23px;
  border: 1px solid #ffffff;
  background-color: #2f3035;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  gap: 5px;
`;

const Text = styled.span<{ size: number }>`
  font-family: Gilroy-ExtraBold;
  font-size: ${(props) => props.size + "px"};
  font-style: normal;
  color: #ffffff;
`;

const DateText = styled.span<{ size: number }>`
  font-family: Gilroy-Light;
  font-size: ${(props) => props.size + "px"};
  font-style: normal;
  color: #d9d9d97f;
`;

const DescriptionText = styled.span<{ size: number }>`
  font-family: Gilroy-Light;
  font-size: ${(props) => props.size + "px"};
  font-style: normal;
  color: #d9d9d9;
`;

const Image = styled.img`
  max-height: 500px;
  min-height: 500px;
  height: 200px;
  width: 520px;
  border-radius: 30px;

  border: 1px solid gray;
`;

type Props = {
  title: string;
  text: string;
  image: string;
};

const ThreadItem: FC<Props> = ({ title, text, image }) => {
  return (
    <Container>
      <Text size={20}>{title}</Text>
      <Row>
        {[
          "#пиксельарт",
          "#пиксельарт",
          "#пиксельарт",
          "#пиксельарт",
          "#пиксельарт",
        ].map((tag) => (
          <Tag title={tag} />
        ))}
      </Row>
      <DateText size={12}>23 ноября в 20:53</DateText>
      <DescriptionText size={16}>{text}</DescriptionText>
      <Image src={image} />
    </Container>
  );
};

export { ThreadItem };
