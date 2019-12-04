import React from 'react';
import ShapesMenu from './components/ShapesMenu';
import { Container, Header } from 'semantic-ui-react';

class App extends React.Component {
  state = {userSelection: "Rock", computerSelection: "Rock"};

  getRandomSelection = () => {
    const selections = ["Rock", "Paper", "Scissors"];
    return selections[Math.floor(Math.random() * 3)];
  };
  
  getUserSelection = (selection) => {
    this.setState({ 
      userSelection: selection,
      computerSelection: this.getRandomSelection()
     });
  };

  render() {
    return(
      <Container>
        <Header>React Rock Paper Scissors</Header>
        <hr />
        <ShapesMenu getUserSelection={this.getUserSelection}></ShapesMenu>
        <div>
          User selects: {this.state.userSelection}
        </div>
        <div>
          Computer selects: {this.state.computerSelection}
        </div>
      </Container>
    );
  };
};

export default App;
