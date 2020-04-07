const axios = require('axios');

export const COMMENT_POST_REQUEST = 'COMMENT_POST_REQUEST';
export const COMMENT_POST_SUCCESS = 'COMMENT_POST_SUCCESS';
export const COMMENT_POST_FAILURE = 'COMMENT_POST_FAILURE';

export const commentPostRequest = () => {
    return {
        type: COMMENT_POST_REQUEST
    }
}

export const commentPostSuccess = (comments) => {
    return {
        type: COMMENT_POST_SUCCESS,
        payload: comments
    }
}

export const commentPostFailure = (error) => {
    return {
        type: COMMENT_POST_FAILURE,
        payload: error
    }
}

// export const fetchCommentPost = (id) => {
//     return function (dispatch) {
//         dispatch(commentPostRequest())
//         return fetch(`/comments/${id}`)
//             .then(
//                 response => response.json(),
//                 console.log("Post?"),
//                 error => console.log("Error posting the comment.", error)
//             )
//             .then(json => dispatch(commentPostSuccess(json)))
//     }
// }

export const fetchCommentPost = (userId, itineraryId, text, date, id) => {
    return (dispatch) => {
        dispatch(commentPostRequest())
        axios.post(`/comments/${id}`, {
            'userId': userId,
            'itineraryId': itineraryId,
            'text': text,
            'date': date
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                const comments = response.data
                dispatch(commentPostSuccess(comments))
                console.log(response.data)
            })
            .catch(error => {
                console.log("Error posting the comment.", error)
                dispatch(commentPostFailure(error.message))
            });
    }
};