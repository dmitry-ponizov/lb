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
    const structure = {  configuration, html }

    yield put(actions.createWebsiteStructureStart());

    try {
        yield call(api.websiteStructure, structure, token)
        yield put(actions.createWebsiteStructureSuccess())
        yield getNoty('success','Website saved successfully!')
    } catch(error) {
        yield put(actions.createWebsiteStructureFail(error.response.data.error))
        yield getNoty('error','Website structure not created!')
    } 
}



