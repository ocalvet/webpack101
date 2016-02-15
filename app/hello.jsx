import React from 'react';
import ReactDOM from 'react-dom';
import World from './world.jsx';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello <World /></h1>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('hello'));