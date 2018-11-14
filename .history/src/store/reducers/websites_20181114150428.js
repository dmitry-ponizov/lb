import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'

const initialState = {
    userProfile: null,
    error: null,
    loading: false,
    selectedSection: 'dashboard'
}


export default reducer;
