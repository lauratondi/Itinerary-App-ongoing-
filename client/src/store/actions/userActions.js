const axios = require('axios');

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCES';
export const USER_FAILURE = 'USER_FAILURE';

export const userRequest = () => {
    return {
        type: USER_REQUEST
    }
}

export const userSuccess = (user) => {
    return {
        type: USER_SUCCESS,
        payload: user
    }
}

export const userFailure = (error) => {
    return {
        type: USER_FAILURE,
        payload: error
    }
};

export const fetchUser = (email, password, username) => {
    console.log(email, password, username)
    return (dispatch) => {
        dispatch(userRequest())
        axios.post("/user", {
            'email': email,
            'password': password,
            'username': username
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {
                const user = response.data
                dispatch(userSuccess(user))
                console.log(response.data)
            })
            .catch(error => {
                dispatch(userFailure(error.message));
            });
    }

};