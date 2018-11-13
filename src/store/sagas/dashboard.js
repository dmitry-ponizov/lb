import { put, select, call } from "redux-saga/effects";
import * as api from '../../api'
import * as actions from "../actions/index";
import { getToken } from './selectors'


export function* userProfileSaga(action) {
    const token = yield select(getToken);
    yield put(actions.userProfileStart());

    try {
        const response = yield call(api.fetchUserProfile, token)
        yield put(actions.userProfileSuccess(response.data.data))
    } catch(error) {
        yield put(actions.userProfileFail(error.response.data.error))
    } 
}



