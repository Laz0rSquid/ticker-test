import React, { Component } from 'react';
import '../css/FruitList.css';

// https://github.com/drcmda/react-spring/blob/master/API-OVERVIEW.md
import { Transition } from 'react-spring';


class FruitList extends React.Component {
  render() {
    return (
      /*
      Transition element checks for state changes and renders list updates as animation.
      Documentation: https://github.com/drcmda/react-spring/blob/master/API-OVERVIEW.md#transitions
      */
      <table className="col-md-offset-1 col-md-10">
        <tbody>
          <Transition
            keys={this.props.fruits.map((fruit) => fruit.key)}
            from={{ opacity: 0, height: 0 }} // starting state of new element
            enter={{ opacity: 1, height: 20 }} // endstate of new element
            update={{ opacity: 0.5, height: 20 }}
            leave={{ opacity: 0, height: 0, pointerEvents: 'none' }}
          >
            {this.props.fruits.map((fruit) => (styles) =>
              fruit.value ? (
                <tr style={styles}>
                  <td>{fruit.key}</td>
                  <td>{fruit.value}</td>
                </tr>
              ) : null
            )}
          </Transition>
        </tbody>
      </table>
    );
  }
}

export default FruitList
