export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: LOGOUT_SUCCESS,
        // payload: logout
    };
};