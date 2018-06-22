import React from 'react';

import '../css/bootstrap.css';
import '../css/bootstrap-theme.css';

class Message extends React.Component {
  render() {
    return (
      <div className="participant-list">
        <div>TIMESTAMP</div>
        <div>TITLE</div>
        <table class="table table-condensed">
          <tbody>
            <tr className="participant">
              <td id="participantName">Melanie Otto <span>(1998)</span></td>
              <td id="hasRecord">X</td>
              <td id="hasMedal">1</td>
              <td id="result">00:00:00</td>
            </tr>
            <tr className="participant">
              <td>Karla Otto <span>(1998)</span></td>
              <td>null</td>
              <td>2</td>
              <td>00:00:00</td>
            </tr>
            <tr className="participant">
              <td>Tim Otto <span>(1998)</span></td>
              <td>null</td>
              <td>3</td>
              <td>00:00:00</td>
            </tr>
            <tr className="participant">
              <td>Mark Otto <span>(1998)</span></td>
              <td>null</td>
              <td>null</td>
              <td>00:00:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Message;
