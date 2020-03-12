const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

const initialState = {
    loading: true,
    comments: [],
    error: ''
}

export default function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_COMMENTS_SUCCESS:
            return {
                loading: false,
                comments: action.payload,
                error: ''
            }

        case FETCH_COMMENTS_FAILURE:
            return {
                loading: false,
                comments: [],
                error: action.payload
            }

        default:
            return state
    }
}