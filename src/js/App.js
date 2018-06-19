import React, { Component } from 'react';
import '../css/App.css';
import '../css/index.css';
import '../css/bootstrap.css';
import '../css/bootstrap-theme.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, fruits: {} };
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
      <div className="container">
        <Col md={8} offset={{ md: 2 }}>
          <Table>
            <FruitList fruits={this.state.fruits} />
          </Table>
        </Col>
      </div>
    );
  }
}

class FruitList extends React.Component {
  render() {
    return (
      <tbody>
        {Object.entries(this.props.fruits)
          .reverse()
          .map(([key, value]) => {
            return (
              <tr>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            );
          })}
      </tbody>
    );
  }
}

export default App;
