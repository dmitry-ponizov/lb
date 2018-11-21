import { put, select, call } from "redux-saga/effects";
import * as api from '../../api'
import * as actions from "../actions/index";
import { getToken, getJson, getHtml, getWebsiteId } from './selectors'
import { getNoty } from '../../shared/utility'
import NProgress from 'nprogress'

export function* createWebsiteStructureSaga(action) {

    const token = yield select(getToken);
    const configuration = yield select(getJson)
    const html = yield select(getHtml)
    const websiteId = yield select(getWebsiteId)
    const structure = { websiteId, configuration, html }

    yield put(actions.createWebsiteStructureStart());
    yield NProgress.start()
    try {
        const response = yield call(api.createWebsiteStructure, structure, token)
        yield put(actions.createWebsiteStructureSuccess(response.data.data))
        yield getNoty('success','Website saved successfully!')
        yield NProgress.done()
    } catch(error) {
        if(error.response.status === 500) yield getNoty('error','Server error!')
        yield put(actions.createWebsiteStructureFail(error.response.data.error))
        yield getNoty('error','Website structure not created!')
        yield NProgress.done()
    } 
}


export function* fetchWebsiteStructureSaga(action) {
    const token = yield select(getToken);
    const websiteId = yield select(getWebsiteId)

    yield put(actions.fetchWebsiteStructureStart());
    yield NProgress.start()
    try {
        const response = yield call(api.fetchWebsiteStructure, websiteId, token)
        yield put(actions.fetchWebsiteStructureSuccess(response.data.data))
        yield put(actions.jsonInTemplate(response.data.data.configuration))
        yield NProgress.done()
    } catch(error) {
        if(error.response.status === 500) yield getNoty('error','Server error!')
        yield put(actions.fetchWebsiteStructureFail(error.response.data.error))
        yield NProgress.done()
    } 
}
