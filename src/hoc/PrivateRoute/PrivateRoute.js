import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const privateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        rest.isAuth === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

export default privateRoute;