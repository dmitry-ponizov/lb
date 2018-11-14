import * as actionTypes from './actionTypes';


export const fetchWebsitesStart = () => {
    return {
        type: actionTypes.FETCH_TEMPLATES_START
    }
}

export const fetchWebsitesSuccess = (templates) => {
    return {
        type: actionTypes.FETCH_TEMPLATES_SUCCESS,
        templates,
    }
}
export const fetchTemplatesFail = (error) => {
    return {
        type: actionTypes.FETCH_TEMPLATES_FAIL,
        error
    }
}

export const fetchTemplates = () => {
    return {
        type: actionTypes.FETCH_TEMPLATES,
    }
}