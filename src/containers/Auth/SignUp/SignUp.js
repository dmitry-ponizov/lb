import React, { Component } from 'react'
import Input from '../../../components/UI/Input/Input'
import { updateObject,checkValidity  } from '../../../shared/utility'
import './SignUp.scss'
import Button from '../../../components/UI/Button/Button'
import NavigationItem from '../../../components/UI/NavigationItem/NavigationItem'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import Spinner from '../../../components/UI/Spinner/Spinner'

class SignUp extends Component {

    state = {
        regForm: {
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
                touched: false,
                errorMsg: 'Please enter a valid email'
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
                touched: false,
                errorMsg: 'Please enter a min 6 characters'
            },
            repeatPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Repeat password'
                },
                value: '',
                validation: {
                    required: true,
                    isConfirmed: true
                },
                valid: false,
                touched: false,
                errorMsg: 'Passwords not confirmed'
            },
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMsg: 'Field is required'
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMsg: 'Field is required'
            },
        },
        formIsValid: false,
    }

    registrationHandler = (event) => {
        event.preventDefault();

        let formData = {}
        for (let formElement in this.state.regForm) {
            formData[formElement] = this.state.regForm[formElement].value
        }
        
        const regData = {
            email: formData.email,
            first_name: formData.firstName,
            last_name: formData.lastName,
            password: formData.password,
            password_confirmation: formData.repeatPassword,
        }
        this.props.onRegistration(regData, this.props.token)
    }


    inputChangedHandler = (event, inputIdentifier) => {

        const updatedFromElement = updateObject(this.state.regForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.regForm[inputIdentifier].validation, this.state.regForm['password'].value), 
            touched: true
        });

        const updatedRegForm = updateObject(this.state.regForm, {
            [inputIdentifier]: updatedFromElement
        })

        let formIsValid = true;
        for (let inputIdentifier in updatedRegForm) {
            formIsValid = updatedRegForm[inputIdentifier].valid && formIsValid
        }
        this.setState({
            regForm: updatedRegForm,
            formIsValid: formIsValid
        })
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.regForm) {
            formElementsArray.push({
                id: key,
                config: this.state.regForm[key]
            })
        }
        let form = (
            <form className="centredBlock" onSubmit={this.registrationHandler}>
             <h1>Registration</h1>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        errorMsg={formElement.config.errorMsg}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <div className="btnBlock">
                    <Button clicked={this.registrationHandler} btnType="Submit" disabled={!this.state.formIsValid}>Send</Button>
                </div>
                <ul className="links">
                     <NavigationItem link="/login">Sign in</NavigationItem>
                </ul>
            </form>
        );
        if (this.props.loading) {
            form = <Spinner />
        }
        let successMessage = (
            <div className="success centredBlock" >
                <p>Registration completed successfully! </p>
                <p>Please login.</p>
                <NavigationItem link="login">Login</NavigationItem>
            </div>
        )
        return (
            <div className="ContactData" >
                { !this.props.registred ? form : successMessage }
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onRegistration: (formData) => dispatch(actions.registration(formData)),
    }   
}

const mapStateToProps = state => {
    return {
        registred: state.auth.registred
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);