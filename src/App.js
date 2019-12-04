import React from 'react';
import ShapesMenu from './components/ShapesMenu';
import { Container, Header } from 'semantic-ui-react';

class App extends React.Component {
  state = {userSelection: "Rock", compSelection: "Rock"};

  render() {
    return(
      <Container>
        <Header>React Rock Paper Scissors</Header>
        <hr />
        <ShapesMenu></ShapesMenu>
        <div>
          User selects: {this.state.userSelection}
        </div>
      </Container>
    );
  };
};

export default App;
