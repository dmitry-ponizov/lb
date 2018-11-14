import * as actionTypes from './actionTypes';


export const fetchWebsitesStart = () => {
    return {
        type: actionTypes.FETCH_WEBSITES_START
    }
}

export const fetchWebsitesSuccess = (websites) => {
    return {
        type: actionTypes.FETCH_WEBSITES_SUCCESS,
        templates,
    }
}
export const fetchWebsitesFail = (error) => {
    return {
        type: actionTypes.FETCH_WEBSITES_FAIL,
        error
    }
}

export const fetchWebsites = () => {
    return {
        type: actionTypes.FETCH_WEBSITES,
    }
}