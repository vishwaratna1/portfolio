import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './components/MainComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
