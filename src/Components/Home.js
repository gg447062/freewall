import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="nav-container">
          <img src="assets/freewall_logo.png" />
          <div>Twitter</div>
          <div>OpenSea</div>
          <div>Etherscan</div>
          <div>Connect</div>
        </div>
        <div id="connections-container">
          <div>🦊 MetaMask</div>
          <div>🌈 Rainbow</div>
        </div>
        <div>Map</div>
      </div>
    );
  }
}
