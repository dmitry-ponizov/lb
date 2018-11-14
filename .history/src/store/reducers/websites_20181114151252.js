import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'

const initialState = {
    websites: []
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_WEBSITES_START: return fetchTemplatesStart(state)
        case actionTypes.FETCH_WEBSITES_SUCCESS: return fetchTemplatesSuccess(state, action)
        case actionTypes.FETCH_WEBSITES_FAIL: return fetchTemplatesFail(state, action)
        default: return state
    }
}

export default reducer;
