const initialState = {
  loginResponse: '',
  signupResponse: '',
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_DATA': {
      return {
        ...state,
        loginResponse: action.value,
      };
    }

    case 'SIGNUP_DATA': {
      return {
        ...state,
        signupResponse: action.value,
      };
    }

    default:
      return state;
  }
};

export default LoginReducer;
