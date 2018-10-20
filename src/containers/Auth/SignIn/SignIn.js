import React, { Component } from 'react'
import Input from '../../../components/UI/Input/Input'
import { updateObject,checkValidity  } from '../../../shared/utility'
import './SignIn.scss'
import Button from '../../../components/UI/Button/Button'
import NavigationItem from '../../../components/UI/NavigationItem/NavigationItem'
import * as actions from '../../../store/actions/index'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {

    state = {
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
    }


    loginHandler = (event) => {
        event.preventDefault();

        let formData = {}
        for (let formElement in this.state.loginForm) {
            formData[formElement] = this.state.loginForm[formElement].value
        }
    
        this.props.onAuth(formData)
    }


    inputChangedHandler = (event, inputIdentifier) => {

        const updatedFromElement = updateObject(this.state.loginForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.loginForm[inputIdentifier].validation, this.state.loginForm['password'].value), 
            touched: true
        });

        const updatedLoginForm = updateObject(this.state.loginForm, {
            [inputIdentifier]: updatedFromElement
        })

        let formIsValid = true;
        for (let inputIdentifier in updatedLoginForm) {
            formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid
        }
        this.setState({
            loginForm: updatedLoginForm,
            formIsValid: formIsValid
        })
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            })
        }
        let form = (
            <form className="centredBlock" onSubmit={this.loginHandler}>
             <h1>Login</h1>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <div className="btnBlock">
                    <Button clicked={this.loginHandler} btnType="Submit" disabled={!this.state.formIsValid}>Send</Button>
                </div>
                <ul className="links">
                     <NavigationItem link="/registration">Sign up</NavigationItem>
                     <NavigationItem link="/login">Restore password</NavigationItem>
                </ul>
            </form>
        );
        if (this.props.loading) {
            // form = < Spinner />
        }
        if (this.props.isAuthenticated === true) {
            return (
                <Redirect to='/dashboard' />
            )
        }
        return (
            <div className="ContactData" >
                {form}
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onAuth: (formData) => dispatch(actions.auth(formData)),
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);