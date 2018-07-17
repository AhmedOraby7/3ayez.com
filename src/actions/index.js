// import firebase from 'firebase';
//
// import {
//     LOGIN_BEGIN,
//     LOGIN_SUCCESS,
//     LOGIN_FAIL,
// } from './types';
//
// export const loginStore = (username, password, onLogin) => dispatch => {
//         dispatch({ type: LOGIN_BEGIN });
//
//
//      firebase.auth().signInWithEmailAndPassword(username, password)
//             .then(() => {
//                 console.log(`logged in as ${username}`);
//                 dispatch({ type: LOGIN_SUCCESS });
//                 onLogin();
//             })
//             .catch(error => {
//                 console.log(error);
//                 dispatch({ type: LOGIN_FAIL, payload: { error_code: error.code } });
//             });
//
// };