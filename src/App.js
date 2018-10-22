import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './store/actions/index'
import HomePage from './containers/HomePage/HomePage'
import SignIn from './containers/Auth/SignIn/SignIn'
import SignUp from './containers/Auth/SignUp/SignUp'
import Dashboard from './containers/Dashboard/Dashboard'
import Logout from './containers/Auth/Logout/Logout';



class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignUp(); 
  }

  render() {

    let routes = (
      <Switch>  
          <Route path="/login" component={SignIn} />
          <Route path="/registration" component={SignUp} />
          <Route path="/"  exact component={HomePage} /> 
          <Redirect to='/' />
      </Switch>
    )
    if(this.props.isAuth) {
      routes = (
      <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/logout" component={Logout} />
          <Redirect to='/dashboard' />
      </Switch>
      )
    }
    return (
      <div className="App">
         { routes }
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