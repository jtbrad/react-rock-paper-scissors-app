//Have yet to implement the wins/losses talley

import React from 'react';
import Result from './components/Result';
import ShapesMenu from './components/ShapesMenu';
import { Container, Header } from 'semantic-ui-react';

class App extends React.Component {
  state = {
    computerSelection: "Rock",
    losses: 0,
    ties: 0, 
    userSelection: "Rock",
    wins: 0,
  };
  
  getRandomSelection = () => {
    const selections = ["Rock", "Paper", "Scissors"];
    return selections[Math.floor(Math.random() * 3)];
  };
  
  startRound = (selection) => {
    this.setState({ 
      userSelection: selection,
      computerSelection: this.getRandomSelection(),
     });
  };

  render() {
    return(
      <Container>
        <Header>React Rock Paper Scissors</Header>
        <hr />
        <div>Statistics</div>
        <div>Wins: {this.state.wins}</div>
        <div>Ties: {this.state.ties}</div>
        <div>Losses: {this.state.losses}</div>
        <ShapesMenu startRound={this.startRound}></ShapesMenu>
        <Result selections={this.state}></Result>
      </Container>
    );
  };
};

export default App;
