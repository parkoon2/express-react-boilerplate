import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    this.getList()
  }

  getList = () => {
    fetch('/api/v1/list')
      .then(res => res.json())
      .then(list => console.log(list))
  }

  render() {
    return (
      <div>
        Hello React
      </div>
    );
  }
}

export default App;
