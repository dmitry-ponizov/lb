import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  registrationUserSaga,
  authUserSaga,
  authCheckStateSaga
} from "./auth";

import {
    userProfileSaga
} from './dashboard'

import {
    fetchTemplatesSaga,
} from './templates'

import {
    createWebsiteStructureSaga,
    fetchWebsiteStructureSaga
} from './builder'

import {
    createWebsiteSaga,
    fetchWebsitesSaga,
    publishWebsiteSaga
} from './websites'

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionTypes.REGISTRATION_USER, registrationUserSaga);
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
}

export function* watchDashboard() {
    yield takeEvery(actionTypes.USER_PROFILE, userProfileSaga);
}

export function* watchTemplates() {
    yield takeEvery(actionTypes.FETCH_TEMPLATES, fetchTemplatesSaga);
    
}

export function* watchBuilder() {
    yield takeEvery(actionTypes.CREATE_WEBSITE_STRUCTURE, createWebsiteStructureSaga)
    yield takeEvery(actionTypes.FETCH_WEBSITE_STRUCTURE, fetchWebsiteStructureSaga)
}

export function* watchWebsites() {
    yield takeEvery(actionTypes.CREATE_WEBSITE, createWebsiteSaga);
    yield takeEvery(actionTypes.FETCH_WEBSITES, fetchWebsitesSaga);
    yield takeEvery(actionTypes.PUBLISH_WEBSITE, publishWebsiteSaga)
}
