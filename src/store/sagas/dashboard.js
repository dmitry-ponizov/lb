import { put, select } from "redux-saga/effects";
import axios from "axios";
import { apiUrl } from '../../apiAdapter'
import * as actions from "../actions/index";
import { getToken } from './selectors'


export function* userProfileSaga(action) {
    const token = yield select(getToken);
    yield put(actions.userProfileStart());

    try {
        const response = yield axios.get(apiUrl() + 'user-profile',  { headers: {"Authorization" : `Bearer ${token}`} })
        yield put(actions.userProfileSuccess(response.data.data))
    } catch(error) {
        yield put(actions.userProfileFail(error.response.data.error))
    } 
}



