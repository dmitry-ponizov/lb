import * as actionTypes from './actionTypes';

export const createWebsiteStart = () => {
    return {
        type: actionTypes.CREATE_WEBSITE_START
    }
}

export const createWebsiteSuccess = (website) => {
    return {
        type: actionTypes.CREATE_WEBSITE_SUCCESS,
        website
    }
}

export const createWebsiteFail = (error) => {
    return {
        type: actionTypes.CREATE_WEBSITE_FAIL,
        error
    }
}

export const createWebsite = (siteName) => {
    return {
        type: actionTypes.CREATE_WEBSITE,
        siteName
    }
}

export const createWebsiteStructureStart = () => {
    return {
        type: actionTypes.CREATE_WEBSITE_STRUCTURE_START
    }
}

export const createWebsiteStructureSuccess = (structure) => {
    return {
        type: actionTypes.CREATE_WEBSITE_STRUCTURE_SUCCESS,
        structure
    }
}

export const createWebsiteStructureFail = (error) => {
    return {
        type: actionTypes.CREATE_WEBSITE_STRUCTURE_FAIL,
        error
    }
}

export const createWebsiteStructure = () => {
    return {
        type: actionTypes.CREATE_WEBSITE_STRUCTURE
    }
}

export const fetchWebsitesStart = () => {
    return {
        type: actionTypes.FETCH_WEBSITES_START
    }
}

export const fetchWebsitesSuccess = (websites) => {
    return {
        type: actionTypes.FETCH_WEBSITES_SUCCESS,
        websites,
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

export const selectWebsite = (website) => {
    return {
        type: actionTypes.SELECT_WEBSITE,
        website
    }
}

export const resetWebsite = () => {
    return {
        type: actionTypes.RESET_WEBSITE
    }
}