import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'


const initialState = {
    
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