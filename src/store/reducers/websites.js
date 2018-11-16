import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'

const initialState = {
    websites: null,
    loading: false,
    error: null,
    website: null
}

const createWebsiteStart = (state) => {
    return updateObject(state, { loading: true, error: null })
}

const createWebsiteSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        website: action.website
    })
}

const createWebsiteFail = (state, action) => {
    return updateObject(state, { error: action.error, loading: false })
}

const createWebsiteStructureStart = (state) => {
    return updateObject(state, { loading: true, error: null })
}

const createWebsiteStructureSuccess = (state) => {
    return updateObject(state, { loading: false, error: null })
}

const createWebsiteStructureFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error })
}

const fetchWebsitesStart = (state) => {
    return updateObject(state, { loading: true, error: null })  
}

const fetchWebsitesSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        websites: action.websites,
        error: null
    })
}

const fetchWebsitesFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error })
}

const selectWebsite = (state, action) => {
    return updateObject(state, { website: action.website })
}

const resetWebsite = (state) => {
    return updateObject(state, { website: null })
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_WEBSITE_START: return createWebsiteStart(state)
        case actionTypes.CREATE_WEBSITE_SUCCESS: return createWebsiteSuccess(state, action)
        case actionTypes.CREATE_WEBSITE_FAIL: return createWebsiteFail(state, action)
        case actionTypes.CREATE_WEBSITE_STRUCTURE_START: return createWebsiteStructureStart(state);
        case actionTypes.CREATE_WEBSITE_STRUCTURE_SUCCESS: return createWebsiteStructureSuccess(state);
        case actionTypes.CREATE_WEBSITE_STRUCTURE_FAIL: return createWebsiteStructureFail(state, action);
        case actionTypes.FETCH_WEBSITES_START: return fetchWebsitesStart(state)
        case actionTypes.FETCH_WEBSITES_SUCCESS: return fetchWebsitesSuccess(state, action)
        case actionTypes.FETCH_WEBSITES_FAIL: return fetchWebsitesFail(state, action)
        case actionTypes.SELECT_WEBSITE: return selectWebsite(state, action)
        case actionTypes.RESET_WEBSITE: return resetWebsite(state)
        default: return state
    }
}

export default reducer;
