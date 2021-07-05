import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Practice from './components/Practice';
import Menu from './components/Menu';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Route path="/practice">
          <Practice />
        </Route>
      </Switch>
    </Router>
  );
}
