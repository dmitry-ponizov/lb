import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Logout from './containers/Auth/Logout/Logout';
import { connect } from 'react-redux'
import * as actions from './store/actions/index'
import AsyncComponent from './hoc/AsyncComponent/AsyncComponent'
import HomePage from './containers/HomePage/HomePage'
import SignIn from './containers/Auth/SignIn/SignIn'
import SignUp from './containers/Auth/SignUp/SignUp'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/"  exact component={HomePage} /> 
          <Route path="/login" component={SignIn} />
          <Route path="/registration" component={SignUp} />
          <Redirect to='/' />
         </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(App));