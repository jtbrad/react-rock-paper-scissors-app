import React from 'react';
import ShapesMenu from './components/ShapesMenu';
import { Container, Header } from 'semantic-ui-react';

class App extends React.Component {
  state = {userSelection: "Rock", computerSelection: "Rock", };

  getRandomSelection = () => {
    const selections = ["Rock", "Paper", "Scissors"];
    return selections[Math.floor(Math.random() * 3)];
  };
  
  getUserSelection = (selection) => {
    this.setState({ 
      userSelection: selection,
      computerSelection: this.getRandomSelection(),
     });
  };

  getOutcome = () => {
    switch(this.state.userSelection) {
      case "Rock":
        switch(this.state.computerSelection) {
          case "Rock":
            return "Tie";
          case "Paper":
            return "Loss";
          case "Scissors":
            return "Win";  
        }
      case "Paper":
        switch(this.state.computerSelection) {
          case "Rock":
            return "Win";
          case "Paper":
            return "Tie";
          case "Scissors":
            return "Loss";  
        }
      case "Scissors":
        switch(this.state.computerSelection) {
          case "Rock":
            return "Loss";
          case "Paper":
            return "Win";
          case "Scissors":
            return "Tie";  
        }
    }
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
        <div>
          The outcome is:  {this.getOutcome()}
        </div>
      </Container>
    );
  };
};

export default App;
