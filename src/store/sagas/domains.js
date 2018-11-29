import { put, select, call } from "redux-saga/effects";
import * as api from '../../api'
import * as actions from "../actions/index";
import { getToken, getOrder } from './selectors'
import NProgress from 'nprogress'

export function* checkDomainNameSaga(action) {
    const token = yield select(getToken);
    yield put(actions.checkDomainNameStart());
    yield NProgress.start()
    try {
        const response = yield call(api.checkDomainName, action.domainName, token)
        yield put(actions.checkDomainNameSuccess(response.data))
        yield NProgress.done()
    } catch(error) {
        yield NProgress.done()
        yield put(actions.checkDomainNameFail({domainName: ['Enter correct data, please, e.g "google.com"']}))
 
    } 
}


export function* purchaseDomainSaga(action) {
    const token = yield select(getToken)
    const order = yield select(getOrder)

    yield put(actions.purchaseDomainStart());
    yield NProgress.start()
    try {
        const response = yield call(api.purchaseDomain, order, token)
        yield put(actions.purchaseDomainSuccess(response.data))
        yield NProgress.done()
    } catch(error) {
        yield NProgress.done()
        yield put(actions.purchaseDomainFail(error))
    } 
}

export function* fetchDomainsSaga(action) {
    const token = yield select(getToken);
    yield put(actions.fetchDomainsStart())
    yield NProgress.start()

    try {
        const response = yield call(api.fetchDomains, token)
        yield put(actions.fetchDomainsSuccess(response.data))
        yield NProgress.done()
    } catch (error) {
        yield NProgress.done()
        yield put(actions.fetchDomainsFail(error))
    }
}