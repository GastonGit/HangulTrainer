import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.global.css';
import Practice from './components/Practice';

const Menu = () => {
  return (
    <div>
      <div className="Menu">
        <Link to="/practice">
          <button type="button">Practice</button>
        </Link>
      </div>
    </div>
  );
};

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
