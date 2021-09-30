import React from 'react';
import Map from './Map';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      hideConnections: true,
      hideMap: true,
    };
    this.connect = this.connect.bind(this);
    this.toggleMap = this.toggleMap.bind(this);
  }

  connect() {
    this.setState({
      hideConnections: false,
    });
  }

  toggleMap() {
    const { hideMap } = this.state;
    if (hideMap) {
      this.setState({
        hideMap: false,
      });
    } else {
      this.setState({
        hideMap: true,
      });
    }
  }

  render() {
    const { hideConnections, hideMap } = this.state;

    return (
      <div>
        <div id="nav-container">
          <div id="links">
            <img id="logo" src="assets/freewall_logo.png" />
            <div className="nav-b button">
              <a href="https://twitter.com/" target="_blank">
                Twitter
              </a>
            </div>
            <div className="nav-b button">
              <a href="https://opensea.io/" target="_blank">
                OpenSea
              </a>
            </div>
            <div className="nav-b button">
              <a href="https://etherscan.io/" target="_blank">
                Etherscan
              </a>
            </div>
          </div>
          <div className="nav-b button" onClick={this.connect}>
            Connect
          </div>
        </div>
        {hideConnections ? (
          <div />
        ) : (
          <div id="connections-container">
            <div className="connect-b button">🦊 Metamask</div>
            <div className="connect-b button">🌈 Rainbow</div>
          </div>
        )}
        <div id="map-small" onClick={this.toggleMap}>
          <div>
            <img id="arrow" src="assets/expand-arrow.png" />
          </div>
          Map
        </div>
        {!hideMap ? <Map hideMap={this.toggleMap} /> : <div />}
      </div>
    );
  }
}
