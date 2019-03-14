import React, { Component } from 'react';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<Dependencies>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import { BrowserRouter as Router, Route } from 'react-router-dom'
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<Imports Custom Routing as Auth for protected routes>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import PrivateRoute from './Authentication/PrivateRoute'
import Login from './Authentication/Login'
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<Render Components through Routes>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import DataPage from './Components/DataPage'
import EditAccnt from './Components/EditAccnt'
import './App.css';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Main Router of the APP Controlling URL bar~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
