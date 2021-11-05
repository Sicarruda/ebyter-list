import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:id" component={Edit} />
        </Switch>
    </div>
  );
}

export default App;
