import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">@okchris</h1>
        <Button color="primary">About</Button>
        <Button color="primary">Photos</Button>
        <Button color="primary">Resume</Button>
      </Jumbotron>
    </div>
  );
};

export default Example;