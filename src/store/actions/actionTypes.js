//auth
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const SET_AUTH_REDIRECT_PATH = 'SET_AUTH_REDIRECT_PATH';
export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAIL= 'REGISTRATION_SUCCESS';

//dashboard
export const USER_PROFILE_START = 'USER_PROFILE_START';
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';
export const USER_PROFILE_FAIL = 'USER_PROFILE_FAIL';
export const SELECT_SECTION = 'SELECT_SECTION';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

//builder
export const SELECT_GRID_TYPE = 'SELECT_GRID_TYPE';
export const REFRESH_CONTAINER = 'REFRESH_CONTAINER'
export const DROP_ITEM = 'DROP_ITEM'
export const CHANGE_STYLE_ITEM = 'CHANGE_STYLE_ITEM'
export const SELECT_ITEM = 'SELECT_ITEM'
export const CHANGE_CONTENT_ITEM = 'CHANGE_CONTENT_ITEM';
export const TEMPLATE_IN_JSON = 'TEMPLATE_IN_JSON';
export const JSON_IN_TEMPLATE = 'JSON_IN_TEMPLATE';
export const SAVE_HTML = 'SAVE_HTML';
export const REORDER_COLUMN_ITEMS = 'REORDER_COLUMN_ITEMS'
export const DELETE_ITEM = 'DELETE_ITEM'
export const DELETE_ROW = 'DELETE_ROW'
export const CREATE_WEBSITE_STRUCTURE_START = 'CREATE_WEBSITE_STRUCTURE_START'
export const CREATE_WEBSITE_STRUCTURE_SUCCESS = 'CREATE_WEBSITE_STRUCTURE_SUCCESS'
export const CREATE_WEBSITE_STRUCTURE_FAIL = 'CREATE_WEBSITE_STRUCTURE_FAIL'
export const FETCH_WEBSITE_STRUCTURE_START = 'FETCH_WEBSITE_STRUCTURE_START'
export const FETCH_WEBSITE_STRUCTURE_SUCCESS = 'FETCH_WEBSITE_STRUCTURE_SUCCESS'
export const FETCH_WEBSITE_STRUCTURE_FAIL = 'FETCH_WEBSITE_STRUCTURE_FAIL'
export const RESET_ROWS = 'RESET_ROWS'
export const CHANGE_WIDTH_WORKSPACE = 'CHANGE_WIDTH_WORKSPACE'


//templates
export const FETCH_TEMPLATES_START = 'FETCH_TEMPLATES_START'
export const FETCH_TEMPLATES_SUCCESS = 'FETCH_TEMPLATES_SUCCESS'
export const FETCH_TEMPLATES_FAIL = 'FETCH_TEMPLATES_FAIL'
export const SELECT_TEMPLATE = 'SELECT_TEMPLATE'

//websites
export const CREATE_WEBSITE_START = 'CREATE_WEBSITE_START'
export const CREATE_WEBSITE_SUCCESS = 'CREATE_WEBSITE_SUCCESS'
export const CREATE_WEBSITE_FAIL = 'CREATE_WEBSITE_FAIL'
export const FETCH_WEBSITES_START = 'FETCH_WEBSITES_START'
export const FETCH_WEBSITES_SUCCESS = 'FETCH_WEBSITES_SUCCESS'
export const FETCH_WEBSITES_FAIL = 'FETCH_WEBSITES_FAIL'
export const SELECT_WEBSITE = 'SELECT_WEBSITE'
export const RESET_WEBSITE = 'RESET_WEBSITE'
export const PUBLISH_WEBSITE = 'PUBLISH_WEBSITE'
export const PUBLISH_WEBSITE_START = 'PUBLISH_WEBSITE_START'
export const PUBLISH_WEBSITE_SUCCESS = 'PUBLISH_WEBSITE_SUCCESS'
export const PUBLISH_WEBSITE_FAIL = 'PUBLISH_WEBSITE_FAIL'
export const CHANGE_PUBLISH_STATUS = 'CHANGE_PUBLISH_STATUS'

//domains
export const CHECK_DOMAIN_NAME_START = 'CHECK_DOMAIN_NAME_START';
export const CHECK_DOMAIN_NAME_SUCCESS = 'CHECK_DOMAIN_NAME_SUCCESS';
export const CHECK_DOMAIN_NAME_FAIL = 'CHECK_DOMAIN_NAME_FAIL';
export const CREATE_DOMAIN_ORDER = 'CREATE_DOMAIN_ORDER';
export const PURCHASE_DOMAIN_START = 'PURCHASE_DOMAIN_START';
export const PURCHASE_DOMAIN_SUCCESS = 'PURCHASE_DOMAIN_SUCCESS';
export const PURCHASE_DOMAIN_FAIL = 'PURCHASE_DOMAIN_FAIL';
export const FETCH_DOMAINS_START = 'FETCH_DOMAINS_START';
export const FETCH_DOMAINS_SUCCESS = 'FETCH_DOMAINS_SUCCESS';
export const FETCH_DOMAINS_FAIL = 'FETCH_DOMAINS_FAIL'

//sagas
export const AUTH_INITIATE_LOGOUT = 'AUTH_INITIATE_LOGOUT'
export const AUTH_CHECK_TIMEOUT = 'AUTH_CHECK_TIMEOUT';
export const REGISTRATION_USER = 'REGISTRATION_USER'
export const AUTH_USER  = 'AUTH_USER'
export const AUTH_CHECK_STATE = 'AUTH_CHECK_STATE';
export const USER_PROFILE = 'USER_PROFILE';
export const FETCH_TEMPLATES = 'FETCH_TEMPLATES'
export const CREATE_WEBSITE = 'CREATE_WEBSITE'
export const CREATE_WEBSITE_STRUCTURE = 'CREATE_WEBSITE_STRUCTURE'
export const FETCH_WEBSITES = 'FETCH_WEBSITES'
export const FETCH_WEBSITE_STRUCTURE = 'FETCH_WEBSITE_STRUCTURE'
export const CHECK_DOMAIN_NAME = 'CHECK_DOMAIN_NAME';
export const PURCHASE_DOMAIN = 'PURCHASE_DOMAIN';
export const FETCH_DOMAINS = 'FETCH_DOMAINS'