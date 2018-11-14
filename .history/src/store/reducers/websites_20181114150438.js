import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'

const initialState = {
    websites: []
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_PROFILE_START: return userProfileStart(state)
        case actionTypes.USER_PROFILE_SUCCESS: return userProfileSuccess(state, action)
        case actionTypes.USER_PROFILE_FAIL: return userProfileFail(state, action)
        case actionTypes.SELECT_SECTION: return selectSection(state, action)
        default: return state
    }
}

export default reducer;
