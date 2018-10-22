import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './store/actions/index'
import HomePage from './containers/HomePage/HomePage'
import Logout from './containers/Auth/Logout/Logout';
import PrivateRoute from './hoc/PrivateRoute/PrivateRoute'
import asyncComponent from './hoc/AsyncComponent/AsyncComponent'

const asyncDashboard = asyncComponent(() => {
  return import('./containers/Dashboard/Dashboard')
})

const asyncSignIn = asyncComponent(() => {
  return import('./containers/Auth/SignIn/SignIn')
})

const asyncSignUp = asyncComponent(() => {
  return import('./containers/Auth/SignUp/SignUp')
})

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render() {
    return (
      <div className="App">
          <Switch>
              <Route path="/" exact component={HomePage}  />
              <Route path='/login' component={asyncSignIn} />
              <Route path='/logout' component={Logout} />
              <Route path='/registration' component={asyncSignUp} />
              <PrivateRoute path="/dashboard" component={asyncDashboard} isAuth={this.props.isAuth}/>
              <Redirect to="/" />
          </Switch>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
    return {
      onTryAutoSignUp: () => dispatch(actions.authCheckState())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));