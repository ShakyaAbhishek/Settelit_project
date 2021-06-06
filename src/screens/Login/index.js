import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Colors from '../../common/Colors';
import Common from '../../common';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CheckBox from 'react-native-check-box';
import {useDispatch, useSelector} from 'react-redux';
import * as loginAction from '../../redux/action/loginAction';
import {
  validateEmail,
  validateFirstName,
  validatePassword,
  validatePhoneNo,
} from "../../utilities/validation";
import {Loader} from '../../Components';

const Login = ({navigation}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    passwordError:'',
    name: '',
    cellno: '',
    cellnoError:'',
    loader:false
  });
  const dispatch = useDispatch();
  const loginResponse = useSelector(
    (state) => state.LoginReducer.loginResponse,
  );
  const loaderview = useSelector(
    (state) => state.LoginReducer.loaderResponse,
  );

  useEffect(() => {
    setState({...state, loader:loaderview});
    console.log('dddddd',JSON.stringify(loaderview, undefined, 2))
    if (Object.keys(loginResponse).length) {
      alert('login successfully');
      setState({...state, loader:false});
      navigation.navigate('Home');
      dispatch(loginAction.emptyloginData());
      
    }
    else{
      setState({...state, loader:false});
    }
  }, [loginResponse, loaderview]);

  const login = () => {
    let {email, cellno, password, name} = state;
    if (validatePhoneNo(cellno).status !== true) {
      setState({...state, cellnoError: validatePhoneNo(cellno).message})
      // setMobileNumberError(validatePhoneNo(mobileNumber).message);
    } 
    else if (validatePassword(password).status !== true) {
      setState({...state, passwordError: validatePassword(password).message})
      // setPasswordTextError(validatePassword(passwordText).message);
    }
    else {
    setState({...state, loader:true});
    let data = {
      // email: email,
      cellno: cellno,
      pwd: password,
      // fname: name,
    };
    dispatch(loginAction.doLogin(data));
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
            <Text style={styles.loginText}>Login</Text>
          </View>
          {/* <View>
            <Text style={{color: '#ffffff'}}>email</Text>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(e) => setState({...state, email: e})}
                value={state.email}
              />
            </View>
          </View> */}
          <View style={{marginVertical: 0}}>
            <Text style={{color: '#ffffff'}}>Mobile number</Text>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(e) => setState({...state, cellno: e, cellnoError:''})}
                value={state.cellno}
                keyboardType={'number-pad'}
              />
              {state.cellnoError != '' && <Text style={{color: 'red'}}>{state.cellnoError}</Text>}
            </View>
          </View>
          <View style={{marginVertical: 20}}>
            <Text style={{color: '#ffffff'}}>Password</Text>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(e) => setState({...state, password: e, passwordError:''})}
                value={state.password}
              />
              {state.passwordError != '' && <Text style={{color: 'red'}}>{state.passwordError}</Text>}
            </View>
          </View>
          
          {/* <View style={{marginVertical: 20}}>
            <Text style={{color: '#ffffff'}}>Name</Text>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(e) => setState({...state, name: e})}
                value={state.name}
              />
            </View>
          </View> */}
          <View style={styles.container2}>
            <CheckBox
              style={{flex: 0.7, padding: 10}}
              onClick={() => {
                //   this.setState({
                //     isChecked: !this.state.isChecked,
                //   });
              }}
              isChecked={true}
              rightText={'Remember Me'}
              rightTextStyle={{color: Colors.White_Color}}
              checkBoxColor={Colors.White_Color}
            />
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.loginBtn} onPress={login}>
              <Text style={{color: 'white'}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: Colors.White_Color}}>Create Account</Text>
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

export default Login;
