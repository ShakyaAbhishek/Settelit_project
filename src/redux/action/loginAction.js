import {NoAuthAPI} from '../../services/api';

export function doLogin(data) {
  return async (dispatch) => {
    let loginData = await NoAuthAPI('login', 'POST', data);
    console.warn('logoin', loginData)
    if (!loginData) {
      dispatch({type: 'LOADER', value: false});
    } else {
      dispatch({type: 'LOGIN_DATA', value: loginData});
      dispatch({type: 'LOADER', value: false});
    }
  };
}

export function emptyloginData() {
  return (dispatch) => {
    dispatch({type: 'SIGNUP_DATA', value: ''});
  };
}
