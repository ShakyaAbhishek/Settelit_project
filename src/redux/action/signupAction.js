import {NoAuthAPI} from '../../services/api';

export function doSignup(data) {
  return async (dispatch) => {
    let signupData = await NoAuthAPI('regn', 'POST', data);
    console.warn('signup', signupData);
    if (!signupData) {
      dispatch({type: 'LOADER', value: false});
    } else {
      dispatch({type: 'SIGNUP_DATA', value: signupData});
      dispatch({type: 'LOADER', value: false});
    }
  };
}

export function emptySignupData() {
  return (dispatch) => {
    dispatch({type: 'SIGNUP_DATA', value: ''});
  };
}
