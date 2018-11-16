import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'


const initialState = {
    userProfile: null,
    error: null,
    loading: false,
    selectedSection: 'dashboard',
    sidebarShow: true
}

const userProfileStart = (state) => {
    return updateObject(state, { loading: true, error: null })  
}

const userProfileSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        userProfile: action.userProfile,
        error: null
    })
}

const userProfileFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error })
}

const selectSection = (state, action) => {
    return updateObject(state, { selectedSection: action.section})
}

const toggleSideBar = (state) => {
    return updateObject(state, { sidebarShow: !state.sidebarShow})
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_PROFILE_START: return userProfileStart(state)
        case actionTypes.USER_PROFILE_SUCCESS: return userProfileSuccess(state, action)
        case actionTypes.USER_PROFILE_FAIL: return userProfileFail(state, action)
        case actionTypes.SELECT_SECTION: return selectSection(state, action)
        case actionTypes.TOGGLE_SIDEBAR: return toggleSideBar(state)
        default: return state
    }
}

export default reducer;
