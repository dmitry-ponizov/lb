import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'


const initialState = {
    domain: null,
    error: null,
    loading: false,
    order: {},
    myDomains: []
}

const checkDomainNameStart = (state) => {
    return updateObject(state, { error: null, loading: true})
}

const checkDomainNameSuccess = (state, action) => {
    return updateObject(state, { error: null, loading: false, domain: action.domain })
}

const checkDomainNameFail = (state, action) => {
    return updateObject(state, { error: action.error, loading: false })
}

const createDomainOrder = (state, action) => {
    return updateObject(state, { order: action.order })
}

const purchaseDomainStart = state => {
    return updateObject(state, { error: null, loading: true })
}

const purchaseDomainSuccess = (state, action) => {
    let newMyDomains = [...state.myDomains];
    newMyDomains.push(action.domain)
    return updateObject(state, { myDomains: newMyDomains })
}

const purchaseDomainFail = (state, action) => {
    return updateObject(state, { error: action.error, loading: false })
}

const fetchDomainsStart = state => {
    return updateObject(state, { error: null, loading: true })
}

const fetchDomainsSuccess = (state, action) => {
    return updateObject(state, { error: null, loading: false, myDomains: action.domains })
}

const fetchDomainsFail = (state, action) => {
    return updateObject(state, { error: action.error, loading: false })
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHECK_DOMAIN_NAME_START: return checkDomainNameStart(state)
        case actionTypes.CHECK_DOMAIN_NAME_SUCCESS: return checkDomainNameSuccess(state, action)
        case actionTypes.CHECK_DOMAIN_NAME_FAIL: return checkDomainNameFail(state, action)
        case actionTypes.CREATE_DOMAIN_ORDER: return createDomainOrder(state, action)
        case actionTypes.PURCHASE_DOMAIN_START: return purchaseDomainStart(state)
        case actionTypes.PURCHASE_DOMAIN_SUCCESS: return purchaseDomainSuccess(state, action)
        case actionTypes.PURCHASE_DOMAIN_FAIL: return purchaseDomainFail(state, action)
        case actionTypes.FETCH_DOMAINS_START: return fetchDomainsStart(state)
        case actionTypes.FETCH_DOMAINS_SUCCESS: return fetchDomainsSuccess(state, action)
        case actionTypes.FETCH_TEMPLATES_FAIL: return fetchDomainsFail(state)
        default: return state
    }
}

export default reducer;
