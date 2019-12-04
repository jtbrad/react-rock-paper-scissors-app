import React from 'react';
import Shape from './Shape';
import { Card, Container, Header, } from 'semantic-ui-react';

const ShapesMenu = ({ startRound }) => (
  <Container>
    <Header>Make A Selection To Start A Round</Header>
    <Card.Group itemsPerRow={3}>
      <Shape name="Rock" startRound={startRound}></Shape>
      <Shape name="Paper" startRound={startRound}></Shape>
      <Shape name="Scissors" startRound={startRound}></Shape>
    </Card.Group>
  </Container>
);

export default ShapesMenu;