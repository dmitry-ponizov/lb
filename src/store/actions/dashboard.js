import * as actionTypes from './actionTypes';
import axios from 'axios'
import { apiUrl } from '../../apiAdapter'



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

export const userProfile = (token) => {

    return dispatch => {
        dispatch(userProfileStart());

        axios.get(apiUrl() + 'user-profile',  { headers: {"Authorization" : `Bearer ${token}`} })
        .then(({data}) => {
            dispatch(userProfileSuccess(data.data))
        })
        .catch(error => {
            dispatch(userProfileFail(error.response.data.error))
        })
    }

}