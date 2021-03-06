import { delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import * as api from '../../api'
import * as actions from "../actions/index";
import { getNoty } from '../../shared/utility'
import NProgress from 'nprogress'

export function* logoutSaga(action) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationDate");
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
}

export function* registrationUserSaga(action) {
    yield put(actions.registrationStart())
    yield NProgress.start()
    try {
        yield yield call(api.registrationUser, action.regData);
        yield put(actions.registrationSuccess())
        yield NProgress.done()
    } catch(error) {
        if(error.response.status === 500) yield getNoty('error','Server error!')
        yield put(actions.registrationFail(error.response.data.error))
        yield NProgress.done()
    }
}

export function* authUserSaga(action) {

    yield put(actions.authStart()) 
    yield NProgress.start()
    try {
        const response = yield call(api.loginUser, action.authData);
        const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000)
        yield localStorage.setItem('token', response.data.token)
        yield localStorage.setItem('expirationDate', expirationDate)
        yield put(actions.authSuccess(response.data.token))
        yield put(actions.checkAuthTimeOut(response.data.expiresIn))
        yield NProgress.done()
    } catch(error) {
        if(error.response.status === 500) yield getNoty('error','Server error!')
        yield put(actions.authFail(error.response.data.meta.errors))
        yield NProgress.done()
    }

}

export function* authCheckStateSaga(action) {
    const token = yield localStorage.getItem('token')
    if(!token) {
        yield put(actions.logout());
    } else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'))
        if (expirationDate <=  new Date()) {
             yield put(actions.logout());
        } else {
             yield put(actions.authSuccess(token))
             yield put(actions.checkAuthTimeOut(((expirationDate.getTime() - new Date().getTime()))))
         
        }
    }
}

