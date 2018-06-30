import axios from 'axios';
import React from 'react';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    axios.get('https://google.com')
      .then(({ data }) => {
        this.state.set({
          data,
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          { 'Welcome to next.js!' }
        </div>
        <div>
          { this.state.data }
        </div>
      </div>
    );
  }
}
