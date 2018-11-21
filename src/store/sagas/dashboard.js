import { put, select, call } from "redux-saga/effects";
import * as api from '../../api'
import * as actions from "../actions/index";
import { getToken } from './selectors'
import { getNoty } from '../../shared/utility'
import NProgress from 'nprogress'

export function* userProfileSaga(action) {
    const token = yield select(getToken);
    yield put(actions.userProfileStart());
    yield NProgress.start()
    try {
        const response = yield call(api.fetchUserProfile, token)
        yield put(actions.userProfileSuccess(response.data.data))
        yield NProgress.done()
    } catch(error) {
        if(error.response.status === 500) yield getNoty('error','Server error!')
        yield put(actions.userProfileFail(error.response.data.error))
        yield NProgress.done()
    } 
}



