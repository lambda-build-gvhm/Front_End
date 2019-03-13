import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import PrivateRoute from './Authentication/PrivateRoute'
import Login from './Authentication/Login'
import DataPage from './Components/DataPage'
import EditAccnt from './Components/EditAccnt'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={DataPage} />
          <PrivateRoute path="/editaccnt" component={EditAccnt} />
        </>
      </Router>
    );
  }
}

export default App;
