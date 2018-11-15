import { put, select, call } from "redux-saga/effects";
import * as api from '../../api'
import * as actions from "../actions/index";
import { getToken, getJson, getHtml, getWebsiteId } from './selectors'
import { getNoty } from '../../shared/utility'


export function* createWebsiteStructureSaga(action) {

    const token = yield select(getToken);
    const configuration = yield select(getJson)
    const html = yield select(getHtml)
    const websiteId = yield select(getWebsiteId)
    const structure = { websiteId, configuration, html }

    yield put(actions.createWebsiteStructureStart());

    try {
        const response = yield call(api.createWebsiteStructure, structure, token)
        yield put(actions.createWebsiteStructureSuccess(response.data.data))
        yield getNoty('success','Website saved successfully!')
    } catch(error) {
        yield put(actions.createWebsiteStructureFail(error.response.data.error))
        yield getNoty('error','Website structure not created!')
    } 
}


export function* fetchWebsiteStructureSaga(action) {
    const token = yield select(getToken);
    const websiteId = yield select(getWebsiteId)

    yield put(actions.fetchWebsiteStructureStart());

    try {
        const response = yield call(api.fetchWebsiteStructure, websiteId, token)
        yield put(actions.fetchWebsiteStructureSuccess(response.data.data))
        yield put(actions.jsonInTemplate(response.data.data.configuration))
    } catch(error) {
        yield put(actions.fetchWebsiteStructureFail(error.response.data.error))
    } 
}
