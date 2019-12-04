import React from 'react';
import Shape from './Shape';
import { Card, } from 'semantic-ui-react';

const ShapesMenu = () => (
  <Card.Group itemsPerRow={3}>
    <Shape name="Rock"></Shape>
    <Shape name="Paper"></Shape>
    <Shape name="Scissors"></Shape>
  </Card.Group>
);

export default ShapesMenu;