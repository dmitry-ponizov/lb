import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'


const initialState = {
    token: null,
    userId: null,
    loading: false,
    error: null,
    authRedirectPath: '/dashboard',
    registred: false
}


const authStart = (state) => {
    return updateObject(state, { loading: true, error: null })  
}

const authSuccess = (state, action) => {
    return updateObject(state, { 
        loading: false, 
        token: action.idToken,
        userId: action.userId,
        error: null
    })
}

const authFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error })
}

const authLogout = (state ,action) => {
    return updateObject(state, { token: null, userId: null });
}

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}   

const registrationStart = (state, action) => {
    return updateObject(state, { loading: true, error: null })
}

const registrationSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        registred: true
    })
}
const registrationFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error })
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionTypes.AUTH_FAIL: return authFail(state, action)
        case actionTypes.AUTH_LOGOUT: return authLogout (state, action)
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action)
        case actionTypes.REGISTRATION_START: return registrationStart(state, action)
        case actionTypes.REGISTRATION_SUCCESS: return registrationSuccess(state, action)
        case actionTypes.REGISTRATION_FAIL: return registrationFail(state, action)
        default: return state
    }
}

export default reducer;