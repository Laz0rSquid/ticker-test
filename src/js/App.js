import React, { Component } from 'react';
import '../css/App.css';
import '../css/bootstrap.css';
import '../css/bootstrap-theme.css';
import '../css/index.css';
import '../css/Message.css';

import FruitList from './FruitList';
import Message from './Message';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      fruits: [{}]
    };
  }

  tick() {
    const newFruit = this.state.fruits;
    const secondPassed = this.state.seconds + 1;
    // array.unshift(element) prepends an element to an array
    newFruit.unshift({ key: secondPassed, value: 'avocado' });
    this.setState(() => ({
      seconds: secondPassed,
      fruits: newFruit
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="container" style={{maxWidth: 720 + 'px', minWidth: 360 + 'px'}}>
        <h3>
          <img src="http://via.placeholder.com/42x42" alt="Logo here" />
          NAVBAR
        </h3>
        <Message />
      </div>
    );
  }
}

export default App;
