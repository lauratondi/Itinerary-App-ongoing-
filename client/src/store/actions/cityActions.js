// ACTIONS
export const FETCH_CITIES_REQUEST = 'FETCH_CITIES_REQUEST';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_FAILURE = 'FETCH_CITIES_FAILURE';

// ACTIONS CREATOR

export const fetchCitiesRequest = () => {
    return {
        type: FETCH_CITIES_REQUEST
    }
}

export const fetchCitiesSuccess = (cities) => {
    return {
        type: FETCH_CITIES_SUCCESS,
        payload: cities
    }
}

export const fetchCitiesFailure = (error) => {
    return {
        type: FETCH_CITIES_FAILURE,
        payload: error
    }
}

export const fetchCityList = () => {
    return function (dispatch) {
        dispatch(fetchCitiesRequest())
        return fetch("/cities/all")
            .then(
                response => response.json(),
                error => console.log("An error occured", error)
            )
            .then(json => dispatch(fetchCitiesSuccess(json)))
    }
}