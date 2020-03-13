export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const fetchCommentsRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST
    }
}

export const fetchCommentsSuccess = (comments) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentsFailure = (error) => {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: error
    }
};


export const fetchComments = (id) => {
    return function (dispatch) {
        dispatch(fetchCommentsRequest())
        return fetch(`/comments/${id}`)
            .then(
                response => response.json(),
                console.log("comment?"),
                error => console.log("Error loading comments", error)
            )
            .then(json => dispatch(fetchCommentsSuccess(json)))
    }
};