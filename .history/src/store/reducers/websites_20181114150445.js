import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'

const initialState = {
    websites: []
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_PROFILE_START: return userProfileStart(state)
        default: return state
    }
}

export default reducer;
