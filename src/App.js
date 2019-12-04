import React from 'react';
import ShapesMenu from './components/ShapesMenu';
import { Container, Header } from 'semantic-ui-react';

const App = () => {
  return(
    <Container>
      <Header>React Rock Paper Scissors</Header>
      <hr />
      <ShapesMenu></ShapesMenu>
    </Container>
  );
};

export default App;
