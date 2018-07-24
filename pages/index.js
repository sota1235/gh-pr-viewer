import axios from 'axios';
import React from 'react';

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
        <div>
          { this.props.data }
        </div>
      </div>
    );
  }
}

export default IndexPageComponent;
