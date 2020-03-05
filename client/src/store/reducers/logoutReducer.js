// const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// const initialState = {
//     token: localStorage.getItem('token'),
//     isAuthenticated: null,
//     loading: true,
//     login: {},
//     error: ''
// }

// function logoutReducer(state = initialState, action) {
//     switch (action.type) {
//         case LOGOUT_SUCCESS:
//             return {
//                 ...state,
//                 token: null,
//                 user: null,
//                 logout: action.payload,
//                 isAuthenticated: false,
//                 isLoading: false
//             };

//         default:
//             return state;
//     }
// }

// export default logoutReducer;