import { put, select, call } from "redux-saga/effects";
import * as api from '../../api'
import * as actions from "../actions/index";
import { getToken } from './selectors'


export function* fetchWebsitesSaga(action) {
    const token = yield select(getToken);
    yield put(actions.fetchWebsitesStart());

    try {
        const response = yield call(api.fetchThemes, token)
        yield put(actions.fetchWebsitesSuccess(response.data.data))
    } catch(error) {
        yield put(actions.fetchWebsitesFail(error.response.data.error))
    } 
}




