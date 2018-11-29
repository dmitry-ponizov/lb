import axios from "axios";

const headers = (token) => { return { headers: {"Authorization" : `Bearer ${token}`} } }

export const apiUrl = process.env.NODE_ENV === 'development'  && window.location.host === 'localhost:3300' ?  'http://localhost:8800/api/' :  'http://zeeasy-beta.entenso.com/api/'

// export const apiUrl = process.env.NODE_ENV === 'development'  && window.location.host === 'localhost:3300' ?  'http://zeeasy-beta.entenso.com/api/' :  'http://zeeasy-beta.entenso.com/api/'

export const loginUser = (authData) => axios.post(apiUrl + 'login', authData);

export const registrationUser = (regData) => axios.post(apiUrl + 'user/register', regData);

export const createWebsiteStructure = (structure, token) => axios.put(apiUrl + 'website-structure/' + structure.websiteId, structure, headers(token));

export const fetchUserProfile = (token) => axios.get(apiUrl + 'user-profile',  headers(token))

export const fetchThemes = (token) => axios.get(apiUrl + 'builder/themes',  headers(token))

export const createWebsite = (webSite, token) => axios.post(apiUrl + 'website', webSite, headers(token))

export const fetchWebsites = (token) => axios.get(apiUrl + 'website',  headers(token))

export const fetchWebsiteStructure = (websiteId, token) => axios.get(apiUrl + 'website-structure/' + websiteId, headers(token))

export const publishWebsite = (token, data) => axios.post(apiUrl + 'website/publish', data, headers(token))

export const checkDomainName = (domainName, token) => axios.get(apiUrl + 'domains/check?domainName=' + domainName, headers(token))

export const purchaseDomain = (data, token) => axios.post(apiUrl + 'domains/purchase', data, headers(token))

export const fetchDomains = (token) => axios.get(apiUrl + 'domains', headers(token))


