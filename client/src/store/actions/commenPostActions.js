export const COMMENT_POST_REQUEST = 'COMMENT_POST_REQUEST';
export const COMMENT_POST_SUCCESS = 'COMMENT_POST_SUCCESS';
export const COMMENT_POST_FAILURE = 'COMMENT_POST_FAILURE';

export const commentPostRequest = () => {
    return {
        type: COMMENT_POST_REQUEST
    }
}

export const commentPostSuccess = (comment) => {
    return {
        type: COMMENT_POST_SUCCESS,
        payload: comment
    }
}

export const commentPostFailure = (error) => {
    return {
        type: COMMENT_POST_FAILURE,
        payload: error
    }
}

export const fetchCommentPost = (id) => {
    return function (dispatch) {
        dispatch(commentPostRequest())
        return fetch(`/comments/${id}`)
            .then(
                response => response.json(),
                console.log("Post?"),
                error => console.log("Error posting the comment.", error)
            )
            .then(json => dispatch(commentPostSuccess(json)))
    }
}