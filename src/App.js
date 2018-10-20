import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './store/actions/index'
import HomePage from './containers/HomePage/HomePage'
import SignIn from './containers/Auth/SignIn/SignIn'
import SignUp from './containers/Auth/SignUp/SignUp'
import Dashboard from './containers/Dashboard/Dashboard'
import Logout from './containers/Auth/Logout/Logout';
import PrivateRoute from './hoc/PrivateRoute/PrivateRoute'

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render() {

    return (
      <div className="App">
          <Switch>
              <Route path="/" exact component={HomePage}  />
              <Route path='/login' component={SignIn} />
              <Route path='/logout' component={Logout} />
              <Route path='/registration' component={SignUp} />
              <PrivateRoute path="/dashboard" component={Dashboard} isAuth={this.props.isAuth}/>
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