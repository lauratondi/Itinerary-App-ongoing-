export const FETCH_ITINERARIES_REQUEST = 'FETCH_ITINERARIES_REQUEST';
export const FETCH_ITINERARIES_SUCCESS = 'FETCH_ITINERARIES_SUCCESS';
export const FETCH_ITINERARIES_FAILURE = 'FETCH_ITINERARIES_FAILURE';

export const fetchItinerariesRequest = () => {
    return {
        type: FETCH_ITINERARIES_REQUEST
    }
}

export const fetchItinerariesSuccess = (itineraries) => {
    return {
        type: FETCH_ITINERARIES_SUCCESS,
        payload: itineraries
    }
}

export const fetchItinerariesFailure = (error) => {
    return {
        type: FETCH_ITINERARIES_FAILURE,
        payload: error
    }
};

export const fetchItineraryList = (city) => {
    return function (dispatch) {

        dispatch(fetchItinerariesRequest())
        return fetch(`/itineraries/${city}`)
            .then(
                response => response.json(),
                console.log("hey"),
                error => console.log("An error occured", error)
            )
            .then(json => dispatch(fetchItinerariesSuccess(json)))

    }
};
