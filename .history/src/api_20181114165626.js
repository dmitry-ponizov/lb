import axios from "axios";

const headers = (token) => { return { headers: {"Authorization" : `Bearer ${token}`} } }

export const apiUrl = process.env.NODE_ENV === 'development'  && window.location.host === 'localhost:3300' ?  'http://localhost:8800/api/' :  'http://zeeasy-beta.entenso.com/api/'

export const loginUser = (authData) => axios.post(apiUrl + 'login', authData);

export const registrationUser = (regData) => axios.post(apiUrl + 'user/register', regData);

export const websiteStructure = (structure, token) => axios.patch(apiUrl + 'website-structure', structure, headers(token));

export const fetchUserProfile = (token) => axios.get(apiUrl + 'user-profile',  headers(token))

export const fetchThemes = (token) => axios.get(apiUrl + 'builder/themes',  headers(token))

export const createWebsite = (webSite, token) => axios.post(apiUrl + 'website', webSite, headers(token))

export const fetchWebsites = (token) => axios.get(apiUrl + 'website',  headers(token))


