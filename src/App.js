import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, fruits: { id: 0, value: 'avocado'} };
  }

  tick() {
    const newFruit = this.state.fruits;
    const secondPassed = this.state.seconds + 1;
    newFruit[secondPassed] = 'avocado';
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
      <div className="component-wrapper">
        <FruitList fruits={this.state.fruits} />
      </div>
    );
  }
}

class FruitList extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="list-group text-center">
          {Object.entries(this.props.fruits).map(
            ([key,value]) => {
              return (
                <li>{key} : {value}</li>
              );
            },
          )}
        </ul>
      </div>
    );
  }
}

export default App;
