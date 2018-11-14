import * as actionTypes from './actionTypes';

export const userProfileStart = () => {
    return {
        type: actionTypes.USER_PROFILE_START
    }
}

export const userProfileSuccess = (userProfile) => {
    return {
        type: actionTypes.USER_PROFILE_SUCCESS,
        userProfile: userProfile,
    }
}
export const userProfileFail = (error) => {
    return {
        type: actionTypes.USER_PROFILE_FAIL,
        error: error
    }
}

export const userProfile = () => {

    return {
        type: actionTypes.USER_PROFILE,
    }

}

export const selectSection = () => {
    return {
        
    } 
}