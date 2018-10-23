import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
    }
}
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const checkAuthTimeOut = (expirationTime) => {
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    };
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_INITIATE_LOGOUT
    };
}

export const logoutSucceed = () => {
    return {
      type: actionTypes.AUTH_LOGOUT
    };
  };

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
    return {
        type: actionTypes.REGISTRATION_USER,
        regData: regData
    }
}

export const auth = (authData) => {
    return {
        type: actionTypes.AUTH_USER,
        authData: authData
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE
    }
}
