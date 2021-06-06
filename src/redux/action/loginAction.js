import {NoAuthAPI} from '../../services/api';

export function doLogin(data) {
  return async (dispatch) => {
    dispatch({type: 'LOADER', value: true});
    let loginData = await NoAuthAPI('login', 'POST', data);
    console.warn('logoin', loginData)
    if (!loginData) {
      console.warn('not', loginData)
      dispatch({type: 'LOADER', value: false});
    } else {
      console.warn('yes', loginData)
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
