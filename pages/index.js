import axios from 'axios';
import React from 'react';

class IndexPageComponent extends React.Component {
  static async getInitialProps() {
    const { data } = await axios.get('http://sota1235.com');

    return { data };
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
