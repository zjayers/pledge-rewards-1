import React, { useState } from 'react';
import {
  Container,
  Heading,
  SubHeading,
  Title,
  SmallTitle,
  BackerHeading,
  DescriptionContainer,
  DescCollapseBtn,
} from './Card.style';

const Card = (props) => {
  /* Use Hooks to create state component for the description container */
  const [descOpen, setDescOpen] = useState(false);

  return (
    <Container>
      <Heading>Pledge $5 or more</Heading>
      <SubHeading uppercase>About $6</SubHeading>
      <Title uppercase>High Five Pack</Title>
      <DescriptionContainer
        open={descOpen}
        onClick={() => setDescOpen(!descOpen)}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          cupiditate et explicabo perferendis quis quod quos! Dicta fuga illum
          sunt tempore ut! Assumenda distinctio eius et eveniet illum in magnam.
        </p>
        <DescCollapseBtn open={descOpen}>
          {descOpen ? 'Less' : 'Read more...'}
        </DescCollapseBtn>
      </DescriptionContainer>
      <SubHeading uppercase>
        Estimated
        <br />
        delivery
      </SubHeading>
      <SmallTitle uppercase={false}>Jul 2020</SmallTitle>
      <BackerHeading>19 Backers</BackerHeading>
    </Container>
  );
};

export default Card;
