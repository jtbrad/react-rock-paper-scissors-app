import React from 'react';
import { Card, } from 'semantic-ui-react';

class Shape extends React.Component {
  state = {name: this.props.name};

  render() {
    return(
      <Card>
        <Card.Content>
          <Card.Header>{ this.state.name }</Card.Header>
        </Card.Content>
      </Card>
    );
  };
};

export default Shape;