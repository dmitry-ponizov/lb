import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'

const initialState = {
    templates: [],
    selectedTemplate: '',
    loading: false,
    error: null,
    website: {}
}

const fetchTemplatesStart = (state) => {
    return updateObject(state, { loading: true, error: null })  
}

const fetchTemplatesSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        templates: action.templates,
        error: null
    })
}

const fetchTemplatesFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error })
}

const selectTemplate = (state, action) => {
    return updateObject(state, { selectedTemplate : action.template})
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

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TEMPLATES_START: return fetchTemplatesStart(state)
        case actionTypes.FETCH_TEMPLATES_SUCCESS: return fetchTemplatesSuccess(state, action)
        case actionTypes.FETCH_TEMPLATES_FAIL: return fetchTemplatesFail(state, action)
        case actionTypes.SELECT_TEMPLATE: return selectTemplate(state, action)
        case actionTypes.CREATE_WEBSITE_START: return createWebsiteStart(state)
        case actionTypes.CREATE_WEBSITE_SUCCESS: return createWebsiteSuccess(state, action)
        case actionTypes.CREATE_WEBSITE_FAIL: return createWebsiteFail(state, action)
        default: return state
    }
}

export default reducer;
