import React, { Component } from 'react';
import '../css/App.css';
import '../css/index.css';
import '../css/bootstrap.css';
import '../css/bootstrap-theme.css';

// https://github.com/drcmda/react-spring/blob/master/API-OVERVIEW.md
import { Transition } from 'react-spring';
import { Table, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, fruits: [{}] };
  }

  tick() {
    const newFruit = this.state.fruits;
    const secondPassed = this.state.seconds + 1;
    // array.unshift(element) prepends an element to an array
    newFruit.unshift({ key: secondPassed, value: 'avocado' });
    this.setState(
      () => ({
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
      <div className="container">
        <FruitList fruits={this.state.fruits} />
      </div>
    );
  }
}

class FruitList extends React.Component {
  render() {
    return (
      /*
      Transition element checks for state changes and renders list updates as animation.
      Documentation: https://github.com/drcmda/react-spring/blob/master/API-OVERVIEW.md#transitions
      */
      <Transition
        keys={this.props.fruits.map((fruit) => fruit.key)}
        from={{ opacity: 0, height: 0 }} // starting state of new element
        enter={{ opacity: 1, height: 30 }} // endstate of new element
        update={{ opacity: 0.5, height: 20 }}
        leave={{ opacity: 0, height: 0, pointerEvents: 'none' }}
      >
        {this.props.fruits.map((fruit) => (styles) => (
          <li style={styles}>
            {fruit.key}:{fruit.value}
          </li>
        ))}
      </Transition>
    );
  }
}

export default App;
