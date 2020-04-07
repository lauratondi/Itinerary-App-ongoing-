const COMMENT_POST_REQUEST = 'COMMENT_POST_REQUEST';
const COMMENT_POST_SUCCESS = 'COMMENT_POST_SUCCESS';
const COMMENT_POST_FAILURE = 'COMMENT_POST_FAILURE';

const initialState = {
    loading: true,
    comments: [],
    error: ''
}

export default function commentPostReducer(state = initialState, action) {
    switch (action.type) {
        case COMMENT_POST_REQUEST:
            return {
                ...state,
                loading: true
            }

        case COMMENT_POST_SUCCESS:
            return {
                loading: false,
                comments: action.payload,
                error: ''
            }

        case COMMENT_POST_FAILURE:
            return {
                loading: false,
                comments: [],
                error: action.payload
            }

        default:
            return state
    }
}