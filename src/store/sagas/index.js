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

