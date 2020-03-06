const axios = require('axios');

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const loginSuccess = (login) => {
    return {
        type: LOGIN_SUCCESS,
        payload: login
    }
}

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export const fetchLogin = (email, password) => {
    return (dispatch) => {
        dispatch(loginRequest())
        axios.post("/login", {
            'email': email,
            'password': password
        }).then(response => {
            console.log(response)
            const user = response.data.user
            const token = response.data.token;
            dispatch(loginSuccess(user))
            console.log(user, token)
        }).catch(error => {
            console.log(error)
            dispatch(loginFailure(error.message));
        });
    }

};