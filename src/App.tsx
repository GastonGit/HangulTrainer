import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Practice from './components/Practice';
import Menu from './components/Menu';
import Play from './components/Play';
import Options from './components/Options';

export default function App() {
  return (
    <div>
      <Router>
        <Route path="/">
          <Menu />
        </Route>
        <Switch>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/practice">
            <Practice />
          </Route>
          <Route path="/options">
            <Options />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
