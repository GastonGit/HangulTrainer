import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

const Menu = () => {
  return (
    <div>
      <div className="Menu">
        <a href="#!">
          <button type="button">Practice</button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Menu} />
      </Switch>
    </Router>
  );
}
