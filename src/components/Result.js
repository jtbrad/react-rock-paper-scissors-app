import React from 'react';
import { Card, Header, Container, } from 'semantic-ui-react';

class Result extends React.Component {

  getOutcome = (selections) => {
    switch(selections.userSelection) {
      case "Rock":
        switch(selections.computerSelection) {
          case "Rock":
            return "Tie";
          case "Paper":
            return "Loss";
          case "Scissors":
            return "Win";  
        }
      case "Paper":
        switch(selections.computerSelection) {
          case "Rock":
            return "Win";
          case "Paper":
            return "Tie";
          case "Scissors":
            return "Loss";  
        }
      case "Scissors":
        switch(selections.computerSelection) {
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
        <Header>Results</Header>
        <Card.Group itemsPerRow={3}>
          <Card>
            <Card.Content>
              <Card.Header>User Selection</Card.Header>
              <Card.Description>{ this.props.selections.userSelection }</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Computer Selection</Card.Header>
              <Card.Description>{ this.props.selections.computerSelection }</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Outcome</Card.Header>
              <Card.Description>{ this.getOutcome(this.props.selections) }</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    );
  };
};

export default Result;