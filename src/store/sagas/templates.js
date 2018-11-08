import { put, select } from "redux-saga/effects";
import axios from "axios";
import { apiUrl } from '../../apiAdapter'
import * as actions from "../actions/index";
import { getToken, getUserId, getTemplateId } from './selectors'


export function* fetchTemplatesSaga(action) {
    const token = yield select(getToken);
    yield put(actions.fetchTemplatesStart());

    try {
        const response = yield axios.get(apiUrl() + 'builder/themes',  { headers: {"Authorization" : `Bearer ${token}`} })
        yield put(actions.fetchTemplatesSuccess(response.data.data))
    } catch(error) {
        yield put(actions.fetchTemplatesFail(error.response.data.error))
    } 
}

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

    try {
        const response = yield axios.post(apiUrl() + 'website', webSite, { headers: {"Authorization" : `Bearer ${token}`} })
        yield put(actions.createWebsiteSuccess(response.data.data))
    } catch(error) {
        yield put(actions.createWebsiteFail(error.response.data.error))
    } 

}




