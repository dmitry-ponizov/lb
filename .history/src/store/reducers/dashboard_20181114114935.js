import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'
import { selectSection } from '../actions';


const initialState = {
    userProfile: null,
    error: null,
    loading: false
}

const userProfileStart = (state) => {
    return updateObject(state, { loading: true, error: null })  
}

const userProfileSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        userProfile: action.userProfile,
        error: null
    })
}

const userProfileFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error })
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_PROFILE_START: return userProfileStart(state)
        case actionTypes.USER_PROFILE_SUCCESS: return userProfileSuccess(state, action)
        case actionTypes.USER_PROFILE_FAIL: return userProfileFail(state, action)
        case actionTypes.SELECT_SECTION: return selectSection
        default: return state
    }
}

export default reducer;
