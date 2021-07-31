import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Practice from './components/Practice';
import Header from './components/Header';
import Play from './components/Play';
import Options from './components/Options';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <div className="HeaderContent">
            <Header />
          </div>
        </Route>
        <div className="BodyContent">
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
        </div>
      </Router>
    </div>
  );
}
