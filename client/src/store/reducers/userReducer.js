const USER_REQUEST = 'USER_REQUEST';
const USER_SUCCESS = 'USER_SUCCES';
const USER_FAILURE = 'USER_FAILURE';

const initialState = {
    token: '',
    isAuthenticated: false,
    loading: true,
    user: [],
    error: '',
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case USER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                isAuthenticated: true,
                loading: false,
                user: action.payload,
                error: ''
            }

        case USER_FAILURE:
            localStorage.removeItem('token');
            return {
                isAuthenticated: false,
                loading: false,
                user: {},
                error: action.payload
            }

        default:
            return state
    }
};