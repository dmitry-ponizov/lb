import * as actionTypes from './actionTypes';
import axios from 'axios'
import { apiUrl } from '../../apiAdapter'


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const checkAuthTimeOut = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000 )
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    return {
        type: actionTypes.AUTH_LOGOUT
    }   
}

export const registrationStart = () => {
    return {
        type: actionTypes.REGISTRATION_START
    }
}

export const registrationSuccess = () => {
    return {
        type: actionTypes.REGISTRATION_SUCCESS,
    }
}

export const registrationFail = (error) => {
    return {
        type: actionTypes.REGISTRATION_FAIL,
        error: error
    }
}


export const registration = (regData) => {
    return dispatch => {
        dispatch(registrationStart())

        axios.post(apiUrl() + 'registration', regData)
              .then(response => {
                dispatch(registrationSuccess())
              })
              .catch(error => {
                  dispatch(registrationFail(error.response.data.error))
              })
    }
}

export const auth = (authData) => {
    return dispatch => {
        dispatch(authStart()) 
      
        axios.post(apiUrl() + 'login', authData)
             .then(response => {
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('expirationDate', expirationDate)
                localStorage.setItem('userId', response.data.userId)
                dispatch(authSuccess(response.data.token, response.data.userId))
                dispatch(checkAuthTimeOut(response.data.expiresIn))
        
             })
             .catch(error => {
                dispatch(authFail(error.response.data.error))
             })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if(!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                 dispatch(logout());
            } else {
                 const userId = localStorage.getItem('userId');
                 dispatch(authSuccess(token, userId ))
                 dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()/1000)))
             
            }
        }
    }
}
