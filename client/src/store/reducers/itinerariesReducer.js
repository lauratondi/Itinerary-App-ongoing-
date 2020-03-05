const FETCH_ITINERARIES_REQUEST = 'FETCH_ITINERARIES_REQUEST';
const FETCH_ITINERARIES_SUCCESS = 'FETCH_ITINERARIES_SUCCESS';
const FETCH_ITINERARIES_FAILURE = 'FETCH_ITINERARIES_FAILURE';

const initialState = {
    loading: true,
    itineraries: [],
    error: ''
}

export default function itinerariesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ITINERARIES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_ITINERARIES_SUCCESS:
            return {
                loading: false,
                itineraries: action.payload,
                error: ''
            }

        case FETCH_ITINERARIES_FAILURE:
            return {
                loading: false,
                itineraries: [],
                error: action.payload
            }

        default:
            return state
    }
}

