const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const initialState = {
    token: '',
    isAuthenticated: false,
    loading: true,
    user: {},
    error: ''
}

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                isAuthenticated: true,
                loading: false,
                user: action.payload,
                error: ''
            }
        case LOGIN_FAILURE:
            localStorage.removeItem('token');
            return {
                isAuthenticated: false,
                loading: false,
                user: {},
                error: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                token: '',
                user: {},
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state
    }
}

export default loginReducer;