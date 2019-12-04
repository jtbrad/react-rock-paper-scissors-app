import React from 'react';
import Shape from './Shape';
import { Card, } from 'semantic-ui-react';

const ShapesMenu = ({ getUserSelection }) => (
  <Card.Group itemsPerRow={3}>
    <Shape name="Rock" getUserSelection={getUserSelection}></Shape>
    <Shape name="Paper" getUserSelection={getUserSelection}></Shape>
    <Shape name="Scissors" getUserSelection={getUserSelection}></Shape>
  </Card.Group>
);

export default ShapesMenu;