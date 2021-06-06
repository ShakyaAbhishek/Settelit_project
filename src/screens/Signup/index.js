import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../common/Colors';
import Common from '../../common';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CheckBox from 'react-native-check-box';
import {useDispatch, useSelector} from 'react-redux';
import * as signupAction from '../../redux/action/signupAction';
import {
  validateEmail,
  validateFirstName,
  validatePassword,
  validatePhoneNo,
} from '../../utilities/validation';
import {Loader} from '../../Components';

const Signup = ({navigation}) => {
  const [state, setState] = useState({
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    name: '',
    nameError: '',
    cellno: '',
    cellnoError: '',
    password2: '',
    password2Error: '',
    loader: false,
  });
  const dispatch = useDispatch();

  const signupResponse = useSelector(
    (state) => state.LoginReducer.signupResponse,
  );
  const loaderview = useSelector(
    (state) => state.LoginReducer.loaderResponse,
  );

  useEffect(() => {
    if (Object.keys(signupResponse).length) {
      alert('Signup successfully');
      navigation.goBack();
      dispatch(signupAction.emptySignupData());
    }
  }, [signupResponse]);

  const signup = () => {
    let {
      email,
      emailError,
      cellno,
      cellnoError,
      password,
      passwordError,
      password2,
      password2Error,
      name,
      nameError,
    } = state;
    if (validateFirstName(name).status !== true) {
      setState({...state, nameError: validateFirstName(name).message});
      // setFirstNameError(validateFirstName(name).message);
    } else if (validatePhoneNo(cellno).status !== true) {
      setState({...state, cellnoError: validatePhoneNo(cellno).message});
      // setMobileNumberError(validatePhoneNo(mobileNumber).message);
    } else if (email == '') {
      setState({...state, emailError: 'Enter Email Address'});
      // setEmailIdError("Enter Email Address");
    } else if (validateEmail(email).status !== true) {
      setState({...state, emailError: validateEmail(emailId).message});
      // setEmailIdError(validateEmail(emailId).message);
    } else if (validatePassword(password).status !== true) {
      setState({...state, passwordError: validatePassword(password).message});
      // setPasswordTextError(validatePassword(passwordText).message);
    } else if (password2 !== password) {
      setState({...state, password2Error: 'Please enter same password'});
      // setPasswordTextError(validatePassword(passwordText).message);
    } else {
      setState({...state, loader: true});
      let data = {
        email: email,
        cellno: cellno,
        pwd: password,
        pwd2: password2,
        fname: name,
      };
      dispatch(signupAction.doSignup(data));
    //   var myHeaders = new Headers();
    //   myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    //   var urlencoded = new URLSearchParams();
    //   urlencoded.append('email', email);
    //   urlencoded.append('cellno', cellno);
    //   urlencoded.append('pwd', password);
    //   urlencoded.append('fname', fname);
    //   urlencoded.append('pwd2', password2);

    //   var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: urlencoded,
    //     redirect: 'follow',
    //   };

    //   fetch('https://settleac.herokuapp.com/regn', requestOptions)
    //     .then((response) => response.text())
    //     .then((result) => {console.log(result)})
    //     .catch((error) => console.log('error', error));
    }
  };

  return (
    <ImageBackground
      source={Common.Images.Background_Image}
      style={{flex: 1}}
      imageStyle={{height: '100%', width: '100%', resizeMode: 'stretch'}}>
      <View style={styles.container}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText1}>Settle.ac</Text>
            <Text style={styles.headerText2}>
              Social Messanger for maintaining accounts amoung friends and
              business
            </Text>
          </View>
          <View>
            <Text style={styles.loginText}>Signup</Text>
          </View>
          <View>
            <Text style={{color: '#ffffff'}}>Name</Text>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(e) =>
                  setState({...state, name: e, nameError: ''})
                }
                value={state.name}
              />
              {state.nameError != '' && (
                <Text style={{color: 'red'}}>{state.nameError}</Text>
              )}
            </View>
          </View>
          <View style={{marginVertical: 20}}>
            <Text style={{color: '#ffffff'}}>email</Text>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(e) =>
                  setState({...state, email: e, emailError: ''})
                }
                value={state.email}
              />
              {state.emailError != '' && (
                <Text style={{color: 'red'}}>{state.emailError}</Text>
              )}
            </View>
          </View>
          <View style={{marginVertical: 20}}>
            <Text style={{color: '#ffffff'}}>Mobile number</Text>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(e) =>
                  setState({...state, cellno: e, cellnoError: ''})
                }
                value={state.cellno}
                keyboardType={'number-pad'}
              />
              {state.cellnoError != '' && (
                <Text style={{color: 'red'}}>{state.cellnoError}</Text>
              )}
            </View>
          </View>

          <View style={{marginVertical: 20}}>
            <Text style={{color: '#ffffff'}}>Password</Text>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(e) =>
                  setState({...state, password: e, passwordError: ''})
                }
                value={state.password}
              />
              {state.passwordError != '' && (
                <Text style={{color: 'red'}}>{state.passwordError}</Text>
              )}
            </View>
          </View>

          <View style={{marginVertical: 20}}>
            <Text style={{color: '#ffffff'}}>Confirm Password</Text>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(e) =>
                  setState({...state, password2: e, password2Error: ''})
                }
                value={state.password2}
              />
              {state.password2Error != '' && (
                <Text style={{color: 'red'}}>{state.password2Error}</Text>
              )}
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.loginBtn} onPress={signup}>
              <Text style={{color: 'white'}}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{color: Colors.White_Color}}>
                Already had Account ? click here to login
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
        <Loader loading={loaderview} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor:'#42206C'
  },
  headerContainer: {},
  headerText1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerText2: {
    width: 150,
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    color: Colors.White_Color,
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    borderBottomWidth: 3,
    paddingVertical: 10,
    borderBottomColor: '#e2e2e2',
    color: 'white',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginVertical: 20,
  },
  forgotText: {
    color: Colors.White_Color,
  },
});

export default Signup;
