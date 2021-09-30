import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import PixelEditor from './Components/PixelEditor';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/editor" component={PixelEditor} />
          </Switch>
        </div>
      </Router>
    );
  }
}
