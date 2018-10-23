import reducer from '../reducers/dashboard'
import * as actionTypes from '../actions/actionTypes'


describe('dashboard reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            userProfile: null,
            loading: false,
            error: null,
        })
    })

    it('should store the user profile with token', () => {
        expect(reducer({
            userProfile: null,
            loading: false,
            error: null,
        }, {
            type: actionTypes.USER_PROFILE_SUCCESS,
            userProfile: {
                id: 'some-id',
                first_name: 'some first name',
                last_name: 'some last name'
            }
        })).toEqual({
            userProfile: {
                id: 'some-id',
                first_name: 'some first name',
                last_name: 'some last name'
            },
            loading: false,
            error: null,
        })
    })
})
