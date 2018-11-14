import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'

const initialState = {
    websites: [],
    loading: false,
    error: null,
}


const fetchWebsitesStart = (state) => {
    return updateObject(state, { loading: true, error: null })  
}

const fetchWebsitesSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        websites: action.websites.websites,
        error: null
    })
}

const fetchWebsitesFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error })
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_WEBSITES_START: return fetchWebsitesStart(state)
        case actionTypes.FETCH_WEBSITES_SUCCESS: return fetchWebsitesSuccess(state, action)
        case actionTypes.FETCH_WEBSITES_FAIL: return fetchWebsitesFail(state, action)
        default: return state
    }
}

export default reducer;
