import { put, select, call } from "redux-saga/effects";
import * as api from '../../api'
import * as actions from "../actions/index";
import { getToken, getUserId, getTemplateId, getHtml, getWebsiteId, getJson } from './selectors'
import { getNoty } from '../../shared/utility'
import NProgress from 'nprogress'


export function* createWebsiteSaga(action) {

    const token = yield select(getToken);
    const userId = yield select(getUserId)
    const templateId = yield select(getTemplateId)
    const siteName = action.siteName

    const webSite = {
        themeId: templateId,
        user_id: userId,
        name: siteName
    }

    yield put(actions.createWebsiteStart());
    yield NProgress.start()
    try {
        const response = yield call(api.createWebsite, webSite, token);
        yield put(actions.createWebsiteSuccess(response.data.data))
        yield NProgress.done()
    } catch(error) {
        if(error.response.status === 500) yield getNoty('error','Server error!')
        yield put(actions.createWebsiteFail(error.response.data.meta.errors))
        yield NProgress.done()
    } 

}

export function* fetchWebsitesSaga(action) {
    const token = yield select(getToken);
    yield put(actions.fetchWebsitesStart());
    yield NProgress.start()
    try {
        const response = yield call(api.fetchWebsites, token)
        yield put(actions.fetchWebsitesSuccess(response.data))
        yield NProgress.done()
    } catch(error) {
        if(error.response.status === 500) yield getNoty('error','Server error!')
        yield put(actions.fetchWebsitesFail(error.response.data.error))
        yield NProgress.done()
    } 
}

export function* publishWebsiteSaga() {
    const token = yield select(getToken);
    const html = yield select(getHtml);
    const websiteId = yield select(getWebsiteId);
    const structure = yield select(getJson)
    const data = { websiteId, html, structure }
    yield put(actions.publishWebsiteStart())
    yield NProgress.start()
    try {
        const response = yield call(api.publishWebsite, token, data)
        yield put(actions.publishWebsiteSuccess(response.data.data))
        yield NProgress.done()
    } catch(error) {
        if(error.response.status === 500) yield getNoty('error','Server error!')
        yield put(actions.publishWebsiteFail(error.response.data.error))
        yield NProgress.done()
    }
}


