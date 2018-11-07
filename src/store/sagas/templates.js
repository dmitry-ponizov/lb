import { put, select } from "redux-saga/effects";
import axios from "axios";
import { apiUrl } from '../../apiAdapter'
import * as actions from "../actions/index";
import { getToken } from './selectors'


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



