import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Practice from './components/Practice';
import Menu from './components/Menu';
import Play from './components/Play';
import Options from './components/Options';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
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
  );
}
