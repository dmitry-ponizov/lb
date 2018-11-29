import * as actionTypes from './actionTypes';

export const checkDomainNameStart = () => {
    return {
        type: actionTypes.CHECK_DOMAIN_NAME_START
    }
}

export const checkDomainNameSuccess = (domain) => {
    return {
        type: actionTypes.CHECK_DOMAIN_NAME_SUCCESS,
        domain
    }
}

export const checkDomainNameFail = (error) => {
    return {
        type: actionTypes.CHECK_DOMAIN_NAME_FAIL,
        error
    }
}

export const checkDomainName = (domainName) => {
    return {
        type: actionTypes.CHECK_DOMAIN_NAME,
        domainName
    }
}

export const createDomainOrder = order => {
    return {
        type: actionTypes.CREATE_DOMAIN_ORDER,
        order
    }
}

export const purchaseDomain = () => {
    return {
        type: actionTypes.PURCHASE_DOMAIN
    }
}

export const purchaseDomainStart = () => {
    return {
        type: actionTypes.PURCHASE_DOMAIN_START
    }
}

export const purchaseDomainSuccess = (domain) => {
    return {
        type: actionTypes.PURCHASE_DOMAIN_SUCCESS,
        domain
    }
}

export const purchaseDomainFail = (error) => {
    return {
        type: actionTypes.PURCHASE_DOMAIN_FAIL,
        error
    }
}

export const fetchDomains = () => {
    return {
        type: actionTypes.FETCH_DOMAINS
    }
}

export const fetchDomainsStart = () => {
    return {
        type: actionTypes.FETCH_DOMAINS_START
    }
}

export const fetchDomainsSuccess = domains => {
    return {
        type: actionTypes.FETCH_DOMAINS_SUCCESS,
        domains
    }
} 

export const fetchDomainsFail = error => {
    return {
        type: actionTypes.FETCH_DOMAINS_FAIL,
        error
    }
}
