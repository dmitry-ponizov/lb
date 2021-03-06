import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './store/actions/index'
import HomePage from './containers/HomePage/HomePage'
import Logout from './containers/Auth/Logout/Logout';
import PrivateRoute from './hoc/PrivateRoute/PrivateRoute'
import asyncComponent from './hoc/AsyncComponent/AsyncComponent'
import './App.scss'
import { ThemeProvider } from 'styled-components'
import PageManager from './containers/Builder/PageManager/PageManager';

const theme = {
  mainColor: '#e36854',
  minHeight: '800px',
}

const asyncDashboard = asyncComponent(() => {
  return import('./containers/Dashboard/Dashboard')
})

const asyncSignIn = asyncComponent(() => {
  return import('./containers/Auth/SignIn/SignIn')
})

const asyncSignUp = asyncComponent(() => {
  return import('./containers/Auth/SignUp/SignUp')
})

const asyncPreview = asyncComponent(() => {
  return import('./containers/Preview/Preview')
})

const asyncBuilder = asyncComponent(() => {
  return import('./containers/Builder/Builder')
})

const asyncTemplates = asyncComponent(() => {
  return import('./containers/Dashboard/Templates/Templates')
})

const asyncWebsites = asyncComponent(() => {
  return import('./containers/Dashboard/Websites/Websites')
})
const asyncDomains = asyncComponent(() => {
  return import('./containers/Dashboard/Domains/Domains')
})

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
            <Switch>
                <Route path="/" refresh exact component={HomePage}  />
                <Route path='/login' component={asyncSignIn} />
                <Route path='/logout' component={Logout} />
                <Route path='/registration' component={asyncSignUp} />
                <PrivateRoute path="/preview" component={asyncPreview} isAuth={this.props.isAuth} />
                <PrivateRoute path="/builder" component={asyncBuilder}  isAuth={this.props.isAuth} />
                <PrivateRoute path="/templates" component={asyncTemplates} isAuth={this.props.isAuth}/>
                <PrivateRoute path="/dashboard" component={asyncDashboard} isAuth={this.props.isAuth}/>
                <PrivateRoute path="/websites" component={asyncWebsites} isAuth={this.props.isAuth}/>
                <PrivateRoute path="/domains" component={asyncDomains} isAuth={this.props.isAuth}/>
                <PrivateRoute path="/page_manager" component={PageManager} isAuth={this.props.isAuth}/>
                <Redirect to="/" />
            </Switch>
        </div>
      </ThemeProvider>
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