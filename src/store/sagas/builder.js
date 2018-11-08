import { put, select } from "redux-saga/effects";
import axios from "axios";
import { apiUrl } from '../../apiAdapter'
import * as actions from "../actions/index";
import { getToken, getJson, getHtml, getWebsiteId } from './selectors'
import Noty from 'noty'
import '../../../node_modules/noty/lib/noty.css'
import '../../../node_modules/noty/lib/themes/mint.css'


export function* createWebsiteStructureSaga(action) {

    const token = yield select(getToken);
    const configuration = yield select(getJson)
    const html = yield select(getHtml)
    const websiteId = yield select(getWebsiteId)
    const structure = { websiteId, configuration, html }

    yield put(actions.createWebsiteStructureStart());

    try {
        yield axios.post(apiUrl() + 'website-structure', structure, { headers: {"Authorization" : `Bearer ${token}`} })
        yield put(actions.createWebsiteStructureSuccess())
        yield new Noty({
            type: 'success',
            layout: 'bottomRight',
            text: 'Website saved successfully!',
            timeout: 3000
        }).show()
    } catch(error) {
        yield put(actions.createWebsiteStructureFail(error.response.data.error))
        yield new Noty({
            type: 'error',
            layout: 'bottomRight',
            text: 'Website structure not created!',
            timeout: 3000
        }).show()
    } 
}



