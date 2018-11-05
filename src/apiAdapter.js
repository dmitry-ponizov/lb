export const apiUrl = () =>  process.env.NODE_ENV === 'development'  && window.location.host === 'localhost:3300' ?  'http://localhost:8800/api/' :  'http://zeeasy-beta.entenso.com/api/'





