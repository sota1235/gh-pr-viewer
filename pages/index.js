import axios from 'axios';
import React from 'react';
import { Button } from '@material-ui/core';

class IndexPageComponent extends React.Component {
  static async getInitialProps() {
    return {
      data: 'data',
    };
  }

  render() {
    return (
      <div>
        <div>
          { 'Welcome to next.js!' }
        </div>
        <Button variant="contained">
          Login
        </Button>
        <div>
          { this.props.data }
        </div>
      </div>
    );
  }
}

export default IndexPageComponent;
