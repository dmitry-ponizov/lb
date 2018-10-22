import reducer from '../reducers/auth'
import * as actionTypes from '../actions/actionTypes'


describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            loading: false,
            error: null,
            authRedirectPath: '/'
        })
    })

    it('should store the token upon login', () => {
        expect(reducer({
            token: null,
            loading: false,
            error: null,
            authRedirectPath: '/'
        }, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
        })).toEqual({
            token: 'some-token',
            loading: false,
            error: null,
            authRedirectPath: '/'
        })
    })
})
