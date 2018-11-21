import { put, select, call } from "redux-saga/effects";
import * as api from '../../api'
import * as actions from "../actions/index";
import { getToken} from './selectors'
import { getNoty } from '../../shared/utility'
import NProgress from 'nprogress'

export function* fetchTemplatesSaga(action) {
    const token = yield select(getToken);
    yield put(actions.fetchTemplatesStart());
    yield NProgress.start()
    try {
        const response = yield call(api.fetchThemes, token)
        yield put(actions.fetchTemplatesSuccess(response.data.data))
        yield NProgress.done()
    } catch(error) {
        if(error.response.status === 500) yield getNoty('error','Server error!')
        yield put(actions.fetchTemplatesFail(error.response.data.error))
        yield NProgress.done()
    } 
}






